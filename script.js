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

/* check if item name contains ints */
function containsSpecialCharacters(str) {
    return /\d|\W[^']/.test(str);
}

/* remove spaces and special chars and upper */
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
            const allowedItems = ["Deathblade", "Guinsoo's Rageblade", "Infinity Edge", "Jeweled Gauntlet", "Rabadon's Deathcap", "Spear of Shojin", "Statikk Shiv", "Titan's Resolve", "Blue Buff"];
            const images = 'items/';
            const items = Object.values(data.data);
            let item;
            
            do {
                const randomIndex = Math.floor(Math.random() * items.length);
                item = items[randomIndex];
            } while (!allowedItems.includes(item.name));
            const image = `${images}${item.name}.png`;
            itemsContainer.innerHTML = `${item.name} <br> <img src="${image}">`;
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
    getItem();
    });