/* audio.js — Learn4Kids audio player
   Plays pre-recorded MP3s from audio/en/<word>.mp3
   No TTS fallback — audio files are required.
*/
(function (global) {
  var _audio = new Audio();
  _audio.preload = 'none';

  var _depth = null;

  function getDepth() {
    if (_depth !== null) return _depth;
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].getAttribute('src') || '';
      if (/audio\.js$/.test(src)) {
        var ups = (src.match(/\.\.\//g) || []).length;
        _depth = ups;
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
    return prefix + 'audio/en/' + word.toLowerCase().replace(/\s+/g, '_') + '.mp3';
  }

  global.TTS = {
    speak: function (word) {
      _audio.oncanplaythrough = null;
      _audio.onerror = null;
      _audio.pause();
      _audio.currentTime = 0;

      var called = false;
      var timer = setTimeout(function () { called = true; }, 1500);

      _audio.oncanplaythrough = function () {
        if (called) return;
        called = true;
        clearTimeout(timer);
        _audio.play().catch(function () {});
      };
      _audio.onerror = function () {
        clearTimeout(timer);
      };

      _audio.src = audioPath(word);
      _audio.load();
    },
    preload: function () {}   /* no-op, kept for API compatibility */
  };
}(typeof window !== 'undefined' ? window : this));
