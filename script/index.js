(function () {
  const workItems = document.getElementsByClassName("work-item");
  Object.entries(workItems).map((workItem) => {
    /*preload images */
    var img = new Image();
    img.src = `url('./assets/images/homepage/${workItem[1].id}.png')`;
    /*End preload images */

    document
      .getElementById(workItem[1].id)
      .addEventListener("mouseover", () => {
        document.getElementById(
          "container"
        ).style.backgroundImage = `url('./assets/images/homepage/${workItem[1].id}.png')`;
      });
  });
})();
