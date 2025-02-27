/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content1");

    toggleBtn.addEventListener("click", function () {
        const isActive = sidebar.classList.toggle("active");
        content.style.display = isActive ? "none" : "block";
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
            sidebar.classList.remove("active");
            content.style.display = "block";
        }
    });

    // Keyboard shortcut to toggle sidebar
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            sidebar.classList.remove("active");
            content.style.display = "block";
        }
    });

    // Responsive adjustments using media queries
    function adjustLayout() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove("active");
            content.style.display = "block";
            navMenu.classList.remove("active");
        }
    }
    
    window.addEventListener("resize", adjustLayout);
    adjustLayout();

    // Apply media query styles dynamically
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    function handleMediaChange(e) {
        if (e.matches) {
            sidebar.classList.remove("active");
            content.style.display = "block";
            navMenu.classList.remove("active");
        }
    }
    mediaQuery.addListener(handleMediaChange);
    handleMediaChange(mediaQuery);
});