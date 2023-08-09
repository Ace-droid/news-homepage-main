const menuButton = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");


const body = document.querySelector("body");



      menuButton.addEventListener("click", () => {
            menuButton.classList.toggle("is-active");
            navLinks.classList.toggle("is-active");
            body.classList.toggle("blur");
            body.classList.toggle("fixed");
      })




