/**
 * tts.js — Learn4Kids TTS engine
 *
 * Priority chain:
 *   1. Local pre-recorded MP3  (audio/en/<word>.mp3)
 *   2. EasySpeech (Web Speech API wrapper, loaded from CDN)
 *   3. Raw SpeechSynthesis (last resort)
 */

(function (global) {
  'use strict';

  /* ------------------------------------------------------------------ */
  /*  Path helpers                                                        */
  /* ------------------------------------------------------------------ */

  var AUDIO_ROOT = 'audio/en/';
  var _depth = null;

  function getDepth() {
    if (_depth !== null) return _depth;
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].getAttribute('src') || '';
      var m = src.match(/^(\.\.\/)+tts\.js$/);
      if (m) {
        _depth = (m[0].match(/\.\.\//g) || []).length;
        return _depth;
      }
    }
    _depth = 1;
    return _depth;
  }

  function audioPath(word) {
    var prefix = '';
    var d = getDepth();
    for (var i = 0; i < d; i++) prefix += '../';
    return prefix + AUDIO_ROOT + word.toLowerCase().replace(/\s+/g, '_') + '.mp3';
  }

  /* ------------------------------------------------------------------ */
  /*  Audio file player                                                   */
  /*                                                                      */
  /*  Key fixes vs previous version:                                      */
  /*  - Single Audio instance reused via .src swap — avoids iOS          */
  /*    "interrupted by new load request" errors                          */
  /*  - Handlers detached before re-attaching so they never fire twice   */
  /*  - Fallback triggered only once per call via `called` guard         */
  /* ------------------------------------------------------------------ */

  /* One shared Audio element reused for every word */
  var _audio = new Audio();
  _audio.preload = 'none';

  function playAudioFile(word, onFail) {
    /* detach any leftover handlers from previous call */
    _audio.oncanplaythrough = null;
    _audio.onerror = null;

    /* stop whatever is currently playing */
    _audio.pause();
    _audio.currentTime = 0;

    var called = false;
    function done(ok) {
      if (called) return;
      called = true;
      _audio.oncanplaythrough = null;
      _audio.onerror = null;
      clearTimeout(timer);
      if (!ok) onFail();
    }

    /* safety net: if the browser stalls silently (file missing on some
       browsers fires no error event), fall back after 1.5 s */
    var timer = setTimeout(function () { done(false); }, 1500);

    _audio.oncanplaythrough = function () {
      _audio.play()
        .then(function ()  { done(true); })
        .catch(function () { done(false); });
    };

    _audio.onerror = function () { done(false); };

    /* set src and load — triggers canplaythrough or error */
    _audio.src = audioPath(word);
    _audio.load();
  }

  /* ------------------------------------------------------------------ */
  /*  EasySpeech bootstrap (CDN, lazy)                                   */
  /* ------------------------------------------------------------------ */

  var ES        = null;
  var esReady   = false;
  var esLoading = false;
  var esQueue   = [];
  var ES_CDN    = 'https://cdn.jsdelivr.net/npm/easy-speech/dist/EasySpeech.iife.js';

  function loadEasySpeech(cb) {
    if (esReady) { cb(ES); return; }
    esQueue.push(cb);
    if (esLoading) return;
    esLoading = true;
    var s = document.createElement('script');
    s.src = ES_CDN;
    s.onload = function () {
      ES = global.EasySpeech;
      if (!ES) { flush(null); return; }
      ES.init({ maxTimeout: 5000, interval: 250 })
        .then(function () { esReady = true; flush(ES); })
        .catch(function () { flush(null); });
    };
    s.onerror = function () { flush(null); };
    document.head.appendChild(s);
  }

  function flush(es) {
    var q = esQueue.splice(0);
    for (var i = 0; i < q.length; i++) q[i](es);
  }

  /* ------------------------------------------------------------------ */
  /*  Raw SpeechSynthesis fallback                                        */
  /* ------------------------------------------------------------------ */

  function rawSpeak(text) {
    if (!('speechSynthesis' in global)) return;
    global.speechSynthesis.cancel();
    var utt = new SpeechSynthesisUtterance(text);
    utt.lang  = 'en-US';
    utt.rate  = 0.88;
    utt.pitch = 1.0;
    global.speechSynthesis.speak(utt);
  }

  /* ------------------------------------------------------------------ */
  /*  Public API                                                          */
  /* ------------------------------------------------------------------ */

  global.TTS = {
    speak: function (text) {
      playAudioFile(text, function () {
        /* MP3 failed — try EasySpeech, then raw */
        loadEasySpeech(function (es) {
          if (!es) { rawSpeak(text); return; }
          var voices = es.voices ? es.voices() : [];
          var voice  = voices.find(function (v) {
            return v.lang && v.lang.startsWith('en');
          }) || null;
          es.speak({ text: text, voice: voice, rate: 0.88, pitch: 1.0, volume: 1 })
            .catch(function () { rawSpeak(text); });
        });
      });
    },

    preload: function () {
      loadEasySpeech(function () {});
    }
  };

}(typeof window !== 'undefined' ? window : this));