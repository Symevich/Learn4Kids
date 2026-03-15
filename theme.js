/* theme.js — shared dark/light mode logic */
(function () {
  var STORAGE_KEY = 'l4k-theme';

  /* Apply saved theme before first paint to avoid flash */
  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    /* Inject toggle button into every page */
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Змяніць тэму');
    btn.setAttribute('title', 'Змяніць тэму');
    btn.innerHTML = '<span class="toggle-knob" id="toggle-knob"></span>';
    document.body.appendChild(btn);

    updateIcon();

    btn.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem(STORAGE_KEY, 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem(STORAGE_KEY, 'dark');
      }
      updateIcon();
    });

    function updateIcon() {
      var knob = document.getElementById('toggle-knob');
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      knob.textContent = isDark ? '🌙' : '☀️';
    }
  });
})();
