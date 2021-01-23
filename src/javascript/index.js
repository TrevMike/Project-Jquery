const menu = $(".menuToggle");
const button = $(".toggle");
const xmenu = $(".xMenu");
let bolean = true;

const toggleMenu = () => {
  console.log("popping off for 1st function");
  bolean
    ? (button[0].src = "./imgs/nav-hamburger-close.png")
    : (button[0].src = "./imgs/nav-hamburger.png");
  bolean = !bolean;
  menu.toggleClass("menu");
  button.toggleClass("menuToggle");
};

button.click(toggleMenu);
xmenu.click(toggleMenu);
