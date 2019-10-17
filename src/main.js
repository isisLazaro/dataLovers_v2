const loadPage = async urlPage => {
  const cardBoard = document.getElementById("card-board");
  const paginationBox = document.getElementById("pagination-box");

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
      const infoAPI = data.info;
      const totalPages = infoAPI.pages;
      const prevPage = infoAPI.prev;
      const nextPage = infoAPI.next;

      const resultsByCharacter = data.results;
      resultsByCharacter.map(e => {
        const card = document.createElement("div");
        card.className =
          "column is-half-mobile column is-half-tablet is-one-quarter-desktop column is-one-fifth-widescreen";
        //card.className = "card";
        card.innerHTML = `<img src = ${e.image}><h2 class="has-text-centered has-text-dark has-text-weight-medium is-size-5">${e.name}</h2>`;
        cardBoard.appendChild(card);
      });
      const page = urlPage.slice(48);
      paginationBox.innerHTML = /* html */ `
            <!-- pagination widget -->
            <button id = "first-btn" class = "button is-info is-outlined ">
                <span class="icon"> <i class="fas fa-angle-double-left fa-lg"></i></span>
                <span>first</span>
            </button>
            <button id = "prev-btn" class = "button is-info">
                <span class="icon"> <i class="fas fa-angle-left fa-lg"></i></span>
                <span>prev</span>
            </button>
            <input class="input is-static has-text-right has-text-weight-bold" type="text" value = ${page} readonly>
            <input class="input is-static has-text-centered" type="text" value = "/" readonly>
            <input class="input is-static has-text-left" type="text" value = ${totalPages} readonly>
            <!--<label for = "prev-btn"> ${page} </label>
            <label for = "next-btn"> / ${totalPages} </label>-->
            <button id = "next-btn" class = "button is-info">
                <span>next</span>
                <span class="icon"> <i class="fas fa-angle-right fa-lg"></i></span>
            </button>
            <button id = "last-btn" class = "button is-info is-outlined">
                <span>last</span>
                <span class="icon"> <i class="fas fa-angle-double-right fa-lg"></i></span>
            </button>`;

      const firstBtn = document.getElementById("first-btn");
      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn");
      const lastBtn = document.getElementById("last-btn");

      const directionBtnsFn = (
        prevPage,
        nextPage,
        firstBtn,
        prevBtn,
        nextBtn,
        lastBtn
      ) => {
        if (prevPage == "") {
          prevBtn.disabled = true;
          firstBtn.disabled = true;
        } else {
          prevBtn.disabled = false;
          firstBtn.disabled = false;
        }

        if (nextPage == "") {
          nextBtn.disabled = true;
          lastBtn.disabled = true;
        } else {
          nextBtn.disabled = false;
          lastBtn.disabled = false;
        }
      };

      directionBtnsFn(prevPage, nextPage, firstBtn, prevBtn, nextBtn, lastBtn);

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
