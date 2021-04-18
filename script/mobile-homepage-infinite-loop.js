(function () {
  const backgroundsContainer = document.getElementById("backgrounds-container");
  const repeatedElements = backgroundsContainer.innerHTML.repeat(100);
  document.getElementById("backgrounds-container").innerHTML = repeatedElements;
})();
