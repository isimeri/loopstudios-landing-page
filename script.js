const closeBtn = document.querySelector(".close-icon");
const burgerBtn = document.querySelector(".hamburger-container");
const mobileNav = document.querySelector(".mobile-nav-container");

burgerBtn.addEventListener("click", showNav);
closeBtn.addEventListener("click", hideNav);

function showNav(){
    mobileNav.classList.add("show");
}
function hideNav(){
    mobileNav.classList.remove("show");
}