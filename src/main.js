const API = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})



// ---------- utils -----------
function showMenu(){
    barsBTN.classList.toggle('active')
}


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
    pokemonCardName.innerText = pokemon.name;


    pokemonCard.appendChild(pokemonCardName);
    pokemonCardSection.appendChild(pokemonCard);

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
    const stats = pokemon.stats;
    

    headerContainerLong.style.backgroundColor = `var(--background-dark)`
    headerContainerLong.style.backgroundImage = `url(${pokemon.sprites.front_default})`;
    pokemonDetailName.innerHTML = `${pokemon.name} #${pokemon.id}`;    
    
    const elementContainer = document.createElement('div');
    elementContainer.classList.add('pokemon-element-container');
    pokemonElementContainer.innerHTML = '';
    getPokemonTypes(pokemon.id, pokemonElementContainer)

    const weight = document.querySelector('.weight-number');
    weight.innerHTML = pokemon.weight;
    const height = document.querySelector('.height-number');
    height.innerHTML = pokemon.height;

    pokemonStatsList.innerHTML = `
        <li>HP <progress max="200" value="${stats[0].base_stat}"></progress></li>
        <li>ATK <progress max="200" value="${stats[1].base_stat}" ></progress></li>
        <li>DEF <progress max="200" value="${stats[2].base_stat}"></progress></li>
        <li>S-ATK <progress max="200" value="${stats[3].base_stat}"></progress></li>
        <li>S-DEF <progress max="200" value="${stats[4].base_stat}"></progress></li>
        <li>SPD<progress max="200" value="${stats[5].base_stat}"></progress></li>`

    console.log(pokemon)
}

async function getPokemonTypes(pokemonID, container){
    const data = await API('pokemon/' + pokemonID);
    const pokemon = data.data;
    const types = pokemon.types;
    console.log('tipos de pokemon' ,types)
    container.innerHTML = "";
    types.forEach(type => {
        const elementP =document.createElement('p');
        elementP.classList.add('element');
        elementP.innerHTML = type.type.name;
        elementP.setAttribute('id', type.type.name);
        container.appendChild(elementP);
    });
}
async function filterPokemonBySearch(pokemonName){
    const res = await API('pokemon?limit=100000&offset=0.');
    const pokemonArray = res.data.results;
    console.log(pokemonArray);
    const pokemonFiltered = pokemonArray.filter(pokemon => pokemon.name.includes(pokemonName));
    console.log( 'pokemon Filtered', pokemonFiltered);
    pokemonFiltered.forEach(pokemon => {
        pokemonCardDesigner(pokemon.name)
    });
    barsBTN.classList.toggle('active');

}


async function test(id){
    const data = await API('pokemon-species/' + id);
    const pokemon = data.data;
    console.log('prueba',pokemon)
}

test(220)

