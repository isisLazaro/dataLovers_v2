import displayCards from "./displayCards.js";
import paginator from "./paginator.js";

const cardBoard = document.getElementById("card-board");
const paginationBox = document.getElementById("pagination-box");

const loadPage = async urlPage => {
  cardBoard.innerHTML = "";

  fetch(urlPage)
    //fetch() takes one argument (the path to the resource you want to fetch)
    // 'https://rickandmortyapi.com/api/character' 20 caracteres por página
    .then(response => {
      // returns a promise containing the response (a Response object).
      // json() - extract the JSON body content from the response
      return response.json();
    })
    .then(data => {
      //setHTML(data) otra función
      const infoAPI = data.info;
      const totalPages = infoAPI.pages;
      const prevPage = infoAPI.prev;
      const nextPage = infoAPI.next;
      const resultsByCharacter = data.results;
      const page = urlPage.slice(48);

      displayCards.readDataCharacters(resultsByCharacter, cardBoard);
      paginator.paginatorHTML(paginationBox, page, totalPages);

      const firstBtn = document.getElementById("first-btn");
      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn");
      const lastBtn = document.getElementById("last-btn");

      paginator.directionBtnsFn(
        prevPage,
        nextPage,
        firstBtn,
        prevBtn,
        nextBtn,
        lastBtn
      );

      firstBtn.addEventListener("click", event => {
        event.preventDefault();
        loadPage(`https://rickandmortyapi.com/api/character/?page=1`);
        // #FIXME: falta caso general
      });

      prevBtn.addEventListener("click", event => {
        event.preventDefault();
        loadPage(prevPage);
      });

      nextBtn.addEventListener("click", event => {
        event.preventDefault();
        loadPage(nextPage);
      });

      lastBtn.addEventListener("click", event => {
        event.preventDefault();
        loadPage(
          `https://rickandmortyapi.com/api/character/?page=${totalPages}`
        );
        // #FIXME: falta caso general
      });
    });
};
window.addEventListener(
  "load",
  loadPage(`https://rickandmortyapi.com/api/character/?page=1`)
);
