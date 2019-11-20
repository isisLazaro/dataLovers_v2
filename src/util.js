import displayCards from "./displayCards.js";
import paginator from "./paginator.js";

const cardBoard = document.getElementById("card-board");
const paginationBox = document.getElementById("pagination-box");

const getCurrentPage = url => {
  return url.substring(48);
  //return url.substring(url.length - 1);
};

export const createPagination = (
  { count, next = "", prev = "", pages },
  currentPage
) => {
  const previousPage = getCurrentPage(prev);
  const nextPage = getCurrentPage(next);

  const paginatorBtns = ([] = paginator.btnsHTML(
    paginationBox,
    currentPage,
    pages
  ));

  paginator.btnsState(previousPage, nextPage, paginatorBtns);
  paginator.btnsFn(previousPage, nextPage, pages, paginatorBtns, currentPage);
  return paginatorBtns;
};

export const createCards = (results = []) => {
  displayCards(results, cardBoard);
};
