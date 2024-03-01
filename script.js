const champion = "https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/tft-champion.json";

/* fetch(champion, {
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    }
}) */
axios.get(champion)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.error(error.response.data)
    })