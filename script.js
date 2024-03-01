require('dotenv').config();

document.addEventListning("DOMContentLoaded", function () {
    const apiKey = process.env.API-KEY;
    const championUrl = "https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/tft-champion.json";
    const champContainer = document.getElementById('champ');
    const button = document.getElementById('button');

    let getChampion = () => {
        fetch(championUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                const champName = data.champ[0].name;
                champContainer.textContext = `${champName}`;
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });

    button.addEventListning("click", getChampion);
    getChampion();
    });