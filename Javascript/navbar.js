const span = document.querySelector("span.hamburger");
const parent = document.querySelector(".parent");
const i = document.querySelector(".hamburger i")
span.addEventListener("click", function () {
    parent.classList.toggle("slide");
});