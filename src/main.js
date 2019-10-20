import displayCards from "./displayCards.js";
import paginator from "./paginator.js";

const cardBoard = document.getElementById("card-board");
const paginationBox = document.getElementById("pagination-box");

const loadPage = async urlPage => {
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

      displayCards.readData(resultsByCharacter, cardBoard);
      const paginatorBtns = paginator.paginatorHTML(
        paginationBox,
        page,
        totalPages
      );
      paginator.btnsState(prevPage, nextPage, paginatorBtns);

      paginatorBtns[0].addEventListener("click", event => {
        event.preventDefault();
        loadPage(`https://rickandmortyapi.com/api/character/?page=1`);
        // #FIXME: falta caso general
      });

      paginatorBtns[1].addEventListener("click", event => {
        event.preventDefault();
        loadPage(prevPage);
      });

      paginatorBtns[2].addEventListener("click", event => {
        event.preventDefault();
        loadPage(nextPage);
      });

      paginatorBtns[3].addEventListener("click", event => {
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
