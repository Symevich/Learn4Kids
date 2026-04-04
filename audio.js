/* audio.js — Learn4Kids audio player
    Plays pre-recorded MP3s from audio/en/<word>.mp3
    Assumes audio files are located at ../audio/en/ relative to this script.
    */
(function (global) {
  var _audio = new Audio();
  _audio.preload = 'none';

  function audioPath(word) {
    return '../audio/en/' + word.toLowerCase().replace(/\s+/g, '_') + '.mp3';
  }

  global.TTS = {
    speak: function (word) {
      // Reset audio state
      _audio.pause();
      _audio.currentTime = 0;

      // Remove previous event listeners to avoid conflicts
      _audio.oncanplaythrough = null;
      _audio.onerror = null;

      var hasPlayed = false;
      var timeoutId = setTimeout(function () {
        hasPlayed = true; // Prevent playing after timeout
      }, 1500);

      _audio.oncanplaythrough = function () {
        if (hasPlayed) return;
        hasPlayed = true;
        clearTimeout(timeoutId);
        _audio.play().catch(function (error) {
          console.warn('Audio play failed:', error);
        });
      };

      _audio.onerror = function () {
        clearTimeout(timeoutId);
        console.warn('Audio load failed for word:', word);
      };

      _audio.src = audioPath(word);
      _audio.load();
    }
  };
}(typeof window !== 'undefined' ? window : this));
