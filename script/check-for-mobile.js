(function () {
  const md = new MobileDetect(window.navigator.userAgent);
  if (md.mobile() || md.tablet()) {
    document.location.href = "./homepage-mobile.html";
  }
})();
