(function () {
  const workContainer = document.getElementById("work");
  const repeatedElements = workContainer.innerHTML.repeat(100);
  document.getElementById("work").innerHTML = repeatedElements;
  document.querySelectorAll(".work-item").forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      const imageName = event.target.getAttribute("data-image");
      document.getElementById(
        "container"
      ).style.background = `url('./assets/images/homepage/${imageName}.png') no-repeat center center fixed`;
      document.getElementById("container").style.backgroundSize = "cover";
    });
    item.addEventListener("mouseout", () => {
      document.getElementById("container").style.background = "white";
    });
  });
})();
