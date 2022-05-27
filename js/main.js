var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var mainContainer = document.querySelector(".main-container");
menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  mainContainer.classList.toggle("main-container-large");
}