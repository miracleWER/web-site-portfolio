const open = document.getElementById("menu-open");
const close = document.getElementById("menu-close");
const menuText = document.querySelectorAll(".menu__text");
const menuNav = document.querySelectorAll(".menu__nav");

function showWindow() {
  open.addEventListener("click", function () {
    document.getElementById("menu-window").classList.add("_active");

    for (let i = 0; i < menuText.length; i++) {
      menuText[i].classList.add("_text-effect");
    }
    for (let i = 0; i < menuNav.length; i++) {
      menuNav[i].classList.add("_text-effect");
    }
  });
  close.addEventListener("click", function () {
    document.getElementById("menu-window").classList.remove("_active");

    for (let i = 0; i < menuText.length; i++) {
      menuText[i].classList.remove("_text-effect");
    }
    for (let i = 0; i < menuNav.length; i++) {
      menuNav[i].classList.remove("_text-effect");
    }
  });
}

showWindow();
