const closeBtn = document.querySelector(".close-icon");
const burgerBtn = document.querySelector(".hamburger-container");
const mobileNav = document.querySelector(".mobile-nav-container");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", showNav);
closeBtn.addEventListener("click", hideNav);

function showNav(){
    mobileNav.classList.add("show");
    body.classList.add("nav-open");
}
function hideNav(){
    mobileNav.classList.remove("show");
    body.classList.remove("nav-open");
}