let openli = document.querySelectorAll("ul .clickable");
let arrow = document.querySelectorAll(".links .clickable img");

openli.forEach((li) => {
  li.addEventListener("click", () => {
    li.classList.toggle("open");
  });
});

let toggleMenu = document.querySelector(".toggle_menu");

let linksBox = document.querySelector(".links_box");

let overly = document.querySelector(".popup_overly");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");

  overly.classList.toggle("active");

  linksBox.classList.toggle("active");

});
