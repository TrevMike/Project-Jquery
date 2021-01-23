// the toggle function for the navBar
const menu = $(".menuToggle");
const button = $(".toggle");
const xmenu = $(".xMenu");

const toggleMenu = () => {
  menu.toggleClass("menu");
  button.toggleClass("menuToggle");
};

button.click(toggleMenu);
xmenu.click(toggleMenu);
