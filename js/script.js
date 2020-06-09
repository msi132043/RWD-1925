//Menu & Toggle Button
const menuButtonIcon = document.getElementById('menuButtonIcon');
const mainMenu = document.getElementById('mainMenu');
const navLinks = document.querySelectorAll('.main_menu ul li');

menuButtonIcon.addEventListener("click", function () {
  mainMenu.classList.toggle("menu_toggle");
});

for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    mainMenu.classList.remove("menu_toggle");
  });
}
