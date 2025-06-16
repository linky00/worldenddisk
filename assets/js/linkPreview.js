const linkPreviewImg = document.querySelector(".link-preview");

document.querySelectorAll("a[data-link-preview-src]").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    linkPreviewImg.src = link.getAttribute("data-link-preview-src");
    linkPreviewImg.style.visibility = "visible";
  });

  link.addEventListener("mouseleave", () => {
    linkPreviewImg.src = "";
    linkPreviewImg.style.visibility = "hidden";
  });
});

window.addEventListener("load", () => {
  document.querySelectorAll("a[data-link-preview-src]").forEach((link) => {
    new Image().src = link.getAttribute("data-link-preview-src");
  });
});
