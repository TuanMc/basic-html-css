const thumbContainerElem = document.getElementById("thumbContainer");

thumbContainerElem.addEventListener("mouseenter", function () {
  const hoverElem = thumbContainerElem.getElementsByClassName(
    "hover-effect"
  )[0];
  hoverElem.style.visibility = "visible";
  hoverElem.style.opacity = "1";
});

thumbContainerElem.addEventListener("mouseleave", function () {
  const hoverElem = thumbContainerElem.getElementsByClassName(
    "hover-effect"
  )[0];
  hoverElem.style.visibility = "hidden";
  hoverElem.style.opacity = "0";
});
