$(() => {
    $("#button-open-sidebar").on("click", () => {
      $("#base-wrapper").toggleClass("base-wrapper-shifted");
    });
  });