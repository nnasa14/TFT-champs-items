/* API urls */
const champUrl = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/tft-champion.json';
const traitUrl = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/tft-trait.json';
const itemUrl = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/tft-item.json';
const itemIdUrl = 'https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/item.json';

/* HTML containers */
const traitContainer = document.getElementById('trait');
const champContainer = document.getElementById('champ');
const itemsContainer = document.getElementById('items-container');

const button = document.getElementById('button');

/* remove spaces and special chars */
let justChars = name => {
    const regex = /[^a-zA-Z]/g;

    return name.replace(regex, '');
}

let getChamp = () => {
    fetch(champUrl)
        .then(response => response.json())
        .then(data => {
            const champNames = Object.values(data.data);
            const randomIndex = Math.floor(Math.random() *champNames.length);
            const champ = champNames[randomIndex];
            const imageName = justChars(champ.name);
            const image = `https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/${imageName}.png`;
            champContainer.innerHTML = `${champ.name} <img src="${image}">`;
        })
        .catch(error => console.error('Fetch error:', error));
}

let getItem = () => {
    fetch(itemUrl)
        .then(response => response.json())
        .then(data => {
            const items = Object.values(data.data);
            const randomIndex = Math.floor(Math.random() *items.length);
            const item = items[randomIndex]; 
            const imageName = justChars(item.name);
            const image = `https://cdn.metatft.com/file/metatft/items/tft_item_${imageName}.png`
            itemsContainer.innerHTML += `${item.name} <br> <img src="${image}">`;
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
    itemsContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        getItem();}
    });