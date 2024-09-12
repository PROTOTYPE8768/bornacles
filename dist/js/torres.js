const homies = document.querySelector(".dipindot");
const bastahome = document.querySelector(".home_click");



homies.addEventListener("click", () => {
    homies.classList.toggle("open");
    bastahome.classList.toggle("open");

});