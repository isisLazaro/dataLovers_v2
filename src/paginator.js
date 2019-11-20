import loadPage from "./fetchBasic.js";

const paginator = {
  btnsHTML: (paginationBox, page, totalPages) => {
    paginationBox.innerHTML = /* html */ `
    <!-- pagination widget -->
    <button id = "first-btn" class = "button is-link is-outlined">
        <span class="icon"> <i class="fas fa-angle-double-left fa-lg"></i></span>
        <span class="span-text">first</span>
    </button>
    <button id = "prev-btn" class = "button is-link">
        <span class="icon"> <i class="fas fa-angle-left fa-lg"></i></span>
        <span  class="span-text">prev</span>
    </button>
    <input class="input is-static has-text-right has-text-weight-bold" type="text" value = ${page} readonly>
    <input class="input is-static has-text-centered" type="text" value = "/" readonly>
    <input class="input is-static has-text-left" type="text" value = ${totalPages} readonly>
    <button id = "next-btn" class = "button is-link">
        <span  class="span-text">next</span>
        <span class="icon"> <i class="fas fa-angle-right fa-lg"></i></span>
    </button>
    <button id = "last-btn" class = "button is-link is-outlined">
        <span  class="span-text">last</span>
        <span class="icon"> <i class="fas fa-angle-double-right fa-lg"></i></span>
    </button>`;

    const firstPageBtn = document.getElementById("first-btn");
    const prevPageBtn = document.getElementById("prev-btn");
    const nextPageBtn = document.getElementById("next-btn");
    const lastPageBtn = document.getElementById("last-btn");

    return [firstPageBtn, prevPageBtn, nextPageBtn, lastPageBtn];
  },

  btnsState: (prevPage = "", nextPage = "", paginatorBtns = []) => {
    //#FIXME: operador ternario
    const [firstPageBtn, prevPageBtn, nextPageBtn, lastPageBtn] = paginatorBtns;

    if (prevPage === "") {
      prevPageBtn.disabled = true;
      firstPageBtn.disabled = true;
    } else {
      prevPageBtn.disabled = false;
      firstPageBtn.disabled = false;
    }

    if (nextPage === "") {
      nextPageBtn.disabled = true;
      lastPageBtn.disabled = true;
    } else {
      nextPageBtn.disabled = false;
      lastPageBtn.disabled = false;
    }
  },

  btnsFn: (prevPage, nextPage, totalPages, paginatorBtns, currentPage) => {
    const [firstPageBtn, prevPageBtn, nextPageBtn, lastPageBtn] = paginatorBtns;

    firstPageBtn.addEventListener("click", event => {
      event.preventDefault();
      loadPage(1);
    });

    prevPageBtn.addEventListener("click", event => {
      event.preventDefault();
      loadPage(prevPage);
    });

    nextPageBtn.addEventListener("click", event => {
      event.preventDefault();
      loadPage(nextPage);
    });

    lastPageBtn.addEventListener("click", event => {
      event.preventDefault();
      loadPage(totalPages);
    });
  }
};
export default paginator;
