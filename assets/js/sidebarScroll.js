document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const savedScrollTop = localStorage.getItem("sidebarScroll");

    if (savedScrollTop !== null) {
        sidebar.scrollTop = parseInt(savedScrollTop, 10);

        requestAnimationFrame(() => {
            document.documentElement.classList.remove("js-restore-scroll");
        });
    }

    window.addEventListener("beforeunload", () => {
        localStorage.setItem("sidebarScroll", sidebar.scrollTop);
    });
});
