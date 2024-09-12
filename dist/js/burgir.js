const btn = document.querySelector('.burgir');
const header = document.querySelector('.header');
const nav = document.querySelector('.header__content');
const dropdowns = document.querySelectorAll("a"); 

btn.addEventListener("click", () => {
nav.classList.toggle("open");
header.classList.toggle("open");
});

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
        dropdown.nextElementSibling.classList.toggle("open");
    });
});






// const burgirBtn = document.querySelector(".burgir");
// const headerNav = document.querySelector(".header__nav");



// burgirBtn.addEventListener("click", () => {
//     burgirBtn.classList.toggle("open");
//     headerNav.classList.toggle("open");
    
// });