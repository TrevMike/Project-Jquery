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

// img selector function for services page
let serviceTitle = $(".toggleTitle");
let serviceImage = $(".toggleImg");
let test = $(".btn");
// remove all the "showActive classes from buttons"
function remove() {
  return test.each(function () {
    let item = $(this).removeClass("showActive");
    return item;
  });
}
// toggling between the buttons
const btn = $(".btn").on("click", function () {
  const item = $(this);
  serviceTitle.html(item.html());

  if (item.html() === "Pre-Construction") {
    remove();
    item.addClass("showActive");
    serviceImage.attr(
      "src",
      "./imgs/servicesPage/services-tab-pre-construction-img.png"
    );
  } else if (item.html() === "Construction") {
    remove();
    item.addClass("showActive");
    // item.addClass("showActive");
    serviceImage.attr(
      "src",
      "./imgs/servicesPage/services-tab-construction-img.png"
    );
  } else if (item.html() === "Design Build") {
    remove();
    item.addClass("showActive");
    serviceImage.attr(
      "src",
      "./imgs/servicesPage/services-tab-design-build-img.png"
    );
  } else if (item.html() === "Sustainability") {
    remove();
    item.addClass("showActive");
    serviceImage.attr(
      "src",
      "./imgs/servicesPage/services-tab-sustainability-img.png"
    );
  } else {
    console.log("ERROR: dont do it again");
  }
});
console.log(serviceImage.attr("src"));
