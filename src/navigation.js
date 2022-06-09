backArrow.addEventListener('click',()=> history.back(-1))

window.addEventListener('load', navigator);
window.addEventListener('hashchange', navigator);

function navigator(){
    if (location.hash.startsWith('#pokemon=')){
        console.log('pokemon!!');
        pokemonDetailPage();
    }else{
        pokemonCardsPage();
    }
}


function pokemonCardsPage(){
    pokemonCardSection.innerHTML = ''

    pokemonCardSection.classList.remove('inactive')
    pokemonDetailsSection.classList.add('inactive')
    backArrow.classList.add('inactive')
    headerContainer.classList.remove('header-container--long')

    printPokemon(50);

}
function pokemonDetailPage(){
    pokemonCardSection.classList.add('inactive')
    pokemonDetailsSection.classList.remove('inactive')
    backArrow.classList.remove('inactive')
    headerContainer.classList.add('header-container--long')
    
    const [_, pokemonID] = location.hash.split('=');
    pokemonDetailsDesigner(pokemonID);
}