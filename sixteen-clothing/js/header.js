window.onscroll = () => {
  console.log("scroll");
  const y = document.documentElement.scrollTop;
  const navH = document.getElementById("sixteen-nav").offsetHeight;
  const bannerH = document.getElementById("sixteen-banner").offsetHeight;

  console.log("Vertically: " + y + "px");
  console.log("Total banner & nav height: ", navH + bannerH);
  if (y >= navH + bannerH) {
    console.log("show fixed header");
    document.getElementById("sixteen-nav").classList.add("fixed-header");
  }  else {
    document.getElementById("sixteen-nav").classList.remove("fixed-header");
  }
};
