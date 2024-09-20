const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden-menu");
});

menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("hidden-menu");
});