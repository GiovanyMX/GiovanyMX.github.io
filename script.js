const menuButton = document.getElementById("menuButt");
const menuSubMenu = document.getElementById("menuSubMenu");

menuButton.addEventListener("click", function(){
    menuSubMenu.classList.toggle("show");
})