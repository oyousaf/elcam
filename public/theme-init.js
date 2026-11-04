// Applies a saved theme before first paint. Device mode needs no attribute.
(function () {
  try {
    var theme = localStorage.getItem('elcam-theme');
    if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
