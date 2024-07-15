function set_red() {
  let scrollRatio = $("#main").scrollTop() / $("#hero-window").height();
  const maxRatio = 0.4;
  let effectRatio = scrollRatio / maxRatio;
  $("#hero-image-red").css("opacity", effectRatio);
}

$(() => {
  set_red();
  $("#main").on("scroll", set_red);
});