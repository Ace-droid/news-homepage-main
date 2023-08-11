const menuButton = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");



let isNavOpen = false;
      menuButton.addEventListener("click", () => {
        isNavOpen = !isNavOpen;
        if (isNavOpen) {
          body.style.overflowY = "auto";
        } else {
          body.style.overflowY = "hidden";
        }
            menuButton.classList.toggle("is-active");
            navLinks.classList.toggle("is-active");
      })




