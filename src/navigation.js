searchBtn.addEventListener('click', () => location.hash = 'search=' + searchInput.value);
searchBtnLong.addEventListener('click', () => {
    location.hash = 'search=' + searchInputLong.value
    barsBTN.classList.toggle('active');
});
backArrow.addEventListener('click', () => location.hash = '')
const [_, pokemonID] = location.hash.split('=');


window.addEventListener('load', navigator);
window.addEventListener('hashchange', navigator);

function navigator(){
    if (location.hash.startsWith('#pokemon=')){
        console.log('pokemon!!');
        pokemonDetailPage();
    }else if (location.hash.startsWith('#search=')){
        console.log('tamo bucando manito');
        searchPage();
    }
    else{
        pokemonCardsPage();
    }

    document.documentElement.scrollTop = 0;

}


function pokemonCardsPage(){
    pokemonCardSection.innerHTML = ''

    pokemonCardSection.classList.remove('inactive')
    pokemonDetailsSection.classList.add('inactive')
    backArrow.classList.add('inactive')
    headerContainer.classList.remove('inactive')
    headerContainerLong.classList.add('inactive')


    printPokemon(50);

}
function pokemonDetailPage(){
    pokemonCardSection.classList.add('inactive')
    pokemonDetailsSection.classList.remove('inactive')
    backArrow.classList.remove('inactive')
    headerContainer.classList.add('inactive')
    headerContainerLong.classList.remove('inactive')
 
    const [_, pokemonID] = location.hash.split('=');
    previousPokemonBtn.addEventListener('click', () => {
        location.hash = `#pokemon=${pokemonID-1}`;
        if(location.hash == '#pokemon=0'){
            location.hash = 'pokemon=1';
        }
    })
    nextPokemonBtn.addEventListener('click', () => location.hash = `#pokemon=${parseInt(pokemonID)+1}`)
    
    pokemonDetailsDesigner(pokemonID);


}
function searchPage(){
    pokemonCardSection.innerHTML = ''

    pokemonCardSection.classList.remove('inactive');
    pokemonDetailsSection.classList.add('inactive');
    backArrow.classList.add('inactive');
    headerContainer.classList.remove('inactive');
    headerContainerLong.classList.add('inactive');

    const [_, pokemonName] = location.hash.split('=');
    
    filterPokemonBySearch(pokemonName);

}