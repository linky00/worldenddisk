const main = document.getElementById("main");
const heroWindow = document.getElementById("hero-window");
const heroImageRed = document.getElementById("hero-image-red");

function set_red() {
  if (main && heroWindow && heroImageRed) {
    let scrollRatio = main.scrollTop / heroWindow.offsetHeight;
    const maxRatio = 0.4;
    let effectRatio = scrollRatio / maxRatio;
    heroImageRed.style.opacity = effectRatio;
  }
}

if (main && heroWindow && heroImageRed) {
  set_red();
  main.addEventListener("scroll", set_red);
}
