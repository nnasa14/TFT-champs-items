/* API urls */
const champUrl = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/tft-champion.json';
const traitUrl = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/tft-trait.json';

/* HTML containers */
const traitContainer = document.getElementById('trait');
const champContainer = document.getElementById('champ');

const button = document.getElementById('button');

let getChamp = () => {
    fetch(champUrl)
        .then(response => response.json())
        .then(data => {
            const champNames = Object.values(data.data);
            const randomIndex = Math.floor(Math.random() *champNames.length);
            const champ = champNames[randomIndex];
            champContainer.innerHTML = `${champ.name}`;
        })
        .catch(error => console.error('Fetch error:', error));
}

let getTrait = () => {
    fetch(traitUrl)
        .then(response => response.json())
        .then(data => {
            const traits = Object.values(data.data);
            const randomIndex = Math.floor(Math.random() *traits.length);
            const trait = traits[randomIndex];
            traitContainer.innerHTML = `Trait: ${trait.name}`;
        })
        .catch(error => console.error('Fetch error:', error));
}

button.addEventListener("click", function () {
    getChamp();
    getTrait();
});
getChamp();
getTrait();