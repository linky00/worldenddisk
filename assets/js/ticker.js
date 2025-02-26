function setScrollTime(first = false) {
    const speed = 40.0;
    const tickerTexts = document.querySelectorAll(".ticker-text");
    let textWidth = tickerTexts[0].offsetWidth;
    let scrollTime = textWidth / speed;

    tickerTexts.forEach((text) => {
        text.style.setProperty("--scroll-time", `${scrollTime}s`);

        if (first == true) {
            let delay = Math.random() * scrollTime;
            text.style.setProperty("animation-delay", `-${delay}s`);
        }
    });
}

setScrollTime(true);
window.addEventListener("resize", setScrollTime);
