const hamburger = document.querySelector(".fa-solid.fa-bars.hamburger");
const menuForMobile = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  console.log(menuForMobile.classList);
  menuForMobile.classList.toggle("display");
  console.log(menuForMobile.classList);
});
