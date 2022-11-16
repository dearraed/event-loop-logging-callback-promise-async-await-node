var fetch = require('node-fetch')

function getDataFromAPI1() {
    return fetch("https://api.github.com/users/up1")
        .then(response => response.json())
        .then(data => console.log(JSON.stringify(data, null, "\t")))
}

getDataFromAPI1();

async function getDataFromAPI2() {
    let response = await fetch("https://api.github.com/users/up1")
    let data = await response.json()
    console.log(JSON.stringify(data, null, "\t"))
}

getDataFrcomAPI2()