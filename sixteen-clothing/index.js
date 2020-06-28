console.log("hello");

function test() {
  console.log("inside function");
}

window.addEventListener("scroll", function () {
  const navElement = document.getElementById("sixteen-nav");
  const bannerElement = document.getElementById("sixteen-banner");
  const totalHeight = navElement.offsetHeight + bannerElement.offsetHeight;
  const currentHeight = document.documentElement.scrollTop; // chrome, firefox
  // const currentHeight = document.window.scrollTop; // safari

  console.log("total height: ", totalHeight);
  console.log("current height: ", currentHeight);
  if (currentHeight >= totalHeight - 150) {
    navElement.classList.add("fixed-header");
  } else {
      navElement.classList.remove("fixed-header");
  }

  console.log("scroll");
});
