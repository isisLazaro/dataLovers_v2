const paginator = {
  paginatorStructure: (paginationBox, page, totalPages) => {
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
  }
};
export default paginator;
