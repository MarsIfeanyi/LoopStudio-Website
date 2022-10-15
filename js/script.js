// Hint: We are using JS to put the Open class on the Hamburger when it is clicked and then change it from display:hidden to display: flex

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// Hint: The class 'open' is defined in the input.css it is a custom CSS
