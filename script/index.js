(function () {
const md = new MobileDetect(window.navigator.userAgent);
if (md.mobile() || md.tablet()) {
    document.location.href = './homepage-mobile.html';
}
  const workContainer = document.getElementById("work");
  const repeatedElements = workContainer.innerHTML.repeat(100);
  document.getElementById("work").innerHTML = repeatedElements;
  if (localStorage.getItem("processor") === "positive") {
    document
      .getElementById("pagestyle")
      .setAttribute("href", "./styles/positive.css");
    document.getElementById("processor-switch").src =
      "assets/images/icons/-ve.png";
  } else if (localStorage.getItem("processor") === "negative") {
    document
      .getElementById("pagestyle")
      .setAttribute("href", "./styles/negative.css");
    document.getElementById("processor-switch").src =
      "assets/images/icons/+ve.png";
  }
  document.querySelectorAll(".work-item").forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      const imageName = event.target.getAttribute("data-image");
      const currentStatus = localStorage.getItem("processor") || "positive";
      document.getElementById(
        "container"
      ).style.background = `url('./assets/images/homepage/${currentStatus}/${imageName}.jpg') no-repeat center center fixed`;
      document.getElementById("container").style.backgroundSize = "cover";
    });
    item.addEventListener("mouseout", () => {
      const currentStatus = localStorage.getItem("processor") || "positive";
      if (currentStatus === "positive") {
        document.getElementById("container").style.background = "white";
      } else if (currentStatus === "negative") {
        document.getElementById("container").style.background = "black";
      }
    });
  });
})();
function switchProcessor() {
  let currentStatus = localStorage.getItem("processor");
  if (!currentStatus) {
    localStorage.setItem("processor", "positive");
    document
      .getElementById("pagestyle")
      .setAttribute("href", "./styles/positive.css");
  } else {
    if (currentStatus === "positive") {
      document.getElementById("processor-switch").src =
        "assets/images/icons/+ve.png";
      localStorage.setItem("processor", "negative");
      document.getElementById("container").style.background = "black";
      document
        .getElementById("pagestyle")
        .setAttribute("href", "./styles/negative.css");
    } else if (currentStatus == "negative") {
      document.getElementById("processor-switch").src =
        "assets/images/icons/-ve.png";
      localStorage.setItem("processor", "positive");
      document
        .getElementById("pagestyle")
        .setAttribute("href", "./styles/positive.css");
      document.getElementById("container").style.background = "white";
    }
  }
}
