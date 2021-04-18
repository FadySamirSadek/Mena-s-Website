(function () {
  const md = new MobileDetect(window.navigator.userAgent);
  if (md.mobile()) {
    document.location.href = "./homepage-mobile.html";
  }
})();
