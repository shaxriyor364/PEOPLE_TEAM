//hamburger
let navLink = document.getElementById("nav-menu");
let navMenu = document.getElementById("hamburger");
navMenu.addEventListener("click", () => {
  navLink.classList.toggle("active");
});
