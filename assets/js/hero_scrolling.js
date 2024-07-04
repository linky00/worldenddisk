$(() => {
    $("#button-open-sidebar").on("click", () => {
      $("#base-wrapper").toggleClass("base-wrapper-shifted");
    });
    $("#main").scroll(() => {
      var scrollRatio = $("#main").scrollTop() / $("#hero-window").height();
      const maxRatio = 0.4;
      var effectRatio = scrollRatio / maxRatio;
      $("#hero-image-red").css("opacity", effectRatio);
    })
  });