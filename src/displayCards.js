const displayCards = {
  readDataCharacters: (resultsByCharacter, cardBoard) => {
    resultsByCharacter.map(e => {
      const card = document.createElement("div");
      card.className =
        "column is-half-mobile is-one-quarter-tablet is-one-fifth-desktop ";
      //card.className = "card";
      card.innerHTML = `<img src = ${e.image}><h2 class="has-text-centered has-text-dark has-text-weight-medium is-size-5">${e.name}</h2>`;
      cardBoard.appendChild(card);
    });
  }
};

export default displayCards;
