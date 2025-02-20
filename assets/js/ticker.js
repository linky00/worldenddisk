function setScrollTime(first = false) {
  const speed = 40.0;
  const tickerTexts = $(".ticker-text");
  let textWidth = tickerTexts.first().width();
  let scrollTime = textWidth / speed;
  tickerTexts.css("--scroll-time", `${scrollTime}s`);
  if (first == true) {
    let delay = Math.random() * scrollTime;
    tickerTexts.css("animation-delay", `-${delay}s`);
  }
}

$(() => {
  setScrollTime(true);
  $(window).on("resize", setScrollTime);
});
