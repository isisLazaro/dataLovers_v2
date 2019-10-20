const paginator = {
  paginatorHTML: (paginationBox, page, totalPages) => {
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

    const firstBtn = document.getElementById("first-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const lastBtn = document.getElementById("last-btn");

    return [firstBtn, prevBtn, nextBtn, lastBtn];
  },

  btnsState: (prevPage, nextPage, paginatorBtns) => {
    //#FIXME: operador terciario
    // paginatorButtons = [firstBtn, prevBtn, nextBtn, lastBtn]
    if (prevPage == "") {
      paginatorBtns[1].disabled = true;
      paginatorBtns[0].disabled = true;
      //prevBtn.disabled = true;
      //   firstBtn.disabled = true;
    } else {
      paginatorBtns[1].disabled = false;
      paginatorBtns[0].disabled = false;
    }

    if (nextPage == "") {
      paginatorBtns[2].disabled = true;
      paginatorBtns[3].disabled = true;
    } else {
      paginatorBtns[2].disabled = false;
      paginatorBtns[3].disabled = false;
    }
  }
};
export default paginator;
