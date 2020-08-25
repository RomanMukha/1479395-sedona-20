let menuButton = document.querySelector(".nav__button");
let menuNav = document.querySelector(".nav");

menuButton.addEventListener("click", function() {
  if (menuNav.classList.contains("nav--opened")) {
    menuNav.classList.remove("nav--opened");
    menuNav.classList.add("nav--closed");
  }
  else {
    menuNav.classList.remove("nav--closed");
    menuNav.classList.add("nav--opened");
  }
});
