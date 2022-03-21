const parent = document.querySelector(".parent");
const hamburger = document.querySelector(".hamburger i")
hamburger.addEventListener("click", function () {
    parent.classList.toggle("slide");
});