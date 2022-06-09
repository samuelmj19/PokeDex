const API = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})



// ---------- utils -----------




// ---------- API calls -----------

async function pokemonCardDesigner(pokemonID){
    const data = await API('pokemon/' + pokemonID);
    const pokemon = data.data;
    

    const pokemonCard = document.createElement('article');
    pokemonCard.classList.add('pokemon-cards');
    pokemonCard.setAttribute('id', pokemon.types[0].type.name);
    pokemonCard.style.backgroundColor = `var(--idColor)`
    pokemonCard.style.backgroundImage = `url(${pokemon.sprites.front_default})`;
    pokemonCard.addEventListener('click', ()=>location.hash = `pokemon=${pokemon.id}`)
    const pokemonCardName = document.createElement('p');
    pokemonCardName.classList.add('pokemon-cards--name');
    pokemonCardName.innerText = pokemon.name
    pokemonCard.appendChild(pokemonCardName);
    pokemonCardSection.appendChild(pokemonCard);



    console.log(pokemon)
}
function printPokemon(num){
    let count = num;
    for (let i = 1; i <= count; i++){
        pokemonCardDesigner(i);     
    }
}

async function pokemonDetailsDesigner(pokemonID){
    const data = await API('pokemon/' + pokemonID);
    const pokemon = data.data;
    

    headerContainer.style.backgroundColor = `var(--background-dark)`
    headerContainer.style.backgroundImage = `url(${pokemon.sprites.front_default})`;
    pokemonDetailName.innerHTML = pokemon.name;
    
    const elementContainer = document.createElement('div');
    elementContainer.classList.add('pokemon-element-container');
    pokemonElementContainer.innerHTML = '';
    getPokemonTypes(pokemon.id)

    const weight = document.querySelector('.weight-number');
    weight.innerHTML = pokemon.weight;
    const height = document.querySelector('.height-number');
    height.innerHTML = pokemon.height;







    // const pokemonCard = document.createElement('article');
    // pokemonCard.classList.add('pokemon-cards');
    // pokemonCard.style.backgroundColor = `green`
    // pokemonCard.style.backgroundImage = `url(${pokemon.sprites.front_default})`;
    // pokemonCard.addEventListener('click', ()=>location.hash = `pokemon=${pokemon.id}`)
    // const pokemonCardName = document.createElement('p');
    // pokemonCardName.classList.add('pokemon-cards--name');
    // pokemonCardName.innerText = pokemon.name
    // pokemonCard.appendChild(pokemonCardName);
    // pokemonCardSection.appendChild(pokemonCard);


    console.log(pokemon)
}

async function getPokemonTypes(pokemonID){
    const data = await API('pokemon/' + pokemonID);
    const pokemon = data.data;
    const types = pokemon.types;
    console.log('tipos de pokemon' ,types)

    types.forEach(type => {
        const elementP =document.createElement('p');
        elementP.classList.add('element');
        elementP.innerHTML = type.type.name;
        elementP.setAttribute('id', type.type.name);
        pokemonElementContainer.appendChild(elementP);
    });
}