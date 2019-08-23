urlPage = "https://rickandmortyapi.com/api/character/?page=2";
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
            const resultsByCharacter = data.results;
            resultsByCharacter.map(e => {
                console.log(e.name);
                console.log(e.image);
            })
        })