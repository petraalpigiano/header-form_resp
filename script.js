const hamburger = document.querySelector(".fa-solid.fa-bars.hamburger");
const menuForMobile = document.querySelector(".nav-links");
const forms = document.querySelector(".contact-form");

hamburger.addEventListener("click", () => {
  console.log(menuForMobile.classList);
  menuForMobile.classList.toggle("display");
  console.log(menuForMobile.classList);
});

forms.addEventListener("submit", (event) => {
  event.preventdefault();
});

fetch("https://api.themoviedb.org/3/movie/popular") // di default fa un chiamata GET all API
  .then((response) => response.json()) // return value/risultato: una promessa che si risolve in un oggetto JS, quindi te lo parsa da JSON a JS object
  .then((data) => {
    console.log(data.results); //gestisce i dati trasformati in un oggetto JS
  })
  .catch((error) => {
    console.error("Errore nella richiesta:", error); //cattura eventuali errori
  });
