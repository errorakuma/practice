let players = JSON.parse(localStorage.getItem("players")) || [];

let T = window.location.search.split("=")[1];

let teams = JSON.parse(localStorage.getItem("teams")) || [];

let team = document.getElementById("card");
let center = document.getElementById("center");

let image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2DXJUwFBubrXsBZIGut2exeBPy8qtfWROQ&usqp=CAU";
// let image = "https://www.pngkey.com/png/full/371-3717403_2nd-odi-australia-tour-of-india-at-jaipur.png";

// https://i.pinimg.com/736x/26/4f/80/264f80349fee9ab497afefa361ac4755.jpg

for (let i = 0; i < players.length; i++) {
    if (T == players[i].from) {
        let next = "../card detail/index.html?p=" + players[i].id;
        let play = players[i].isPlaying == true ? "Active" : "Retired";

        team.innerHTML += ` 
        <div class="card">
        <div class="container">
        <div>
        <a href="${next}">
            <figure class="cardImage">
                <img src= ${image}>
            </figure>
        </a>
        </div>
        <div class="right">
        <span>Name: ${players[i].playerName}</span>
        <span>Team: ${players[i].from}</span>
            <span>Price: ${players[i].price}</span>
            <span>Status: ${play}</span>
            <span>Role: ${players[i].description}</span>
        </div>
        </div>
    </div>
    `;
    }
}

let count = 0;
let bat = "";
let bow = "";
for (let i = 0; i < players.length; i++) {
    if (T == players[i].from) {
        count++;
        if (players[i].description == "Batsman") {
            bat = players[i].playerName;
        }
        if (
            players[i].description == "All-rounder" ||
            players[i].description == "wicketkeeper"
        ) {
            bow = players[i].playerName;
        }
    }
}

for (let j = 0; j < teams.length; j++) {
    if (T == teams[j].from) {
        center.innerHTML += `
            <div>Team Name:<span>${T}</span></div>
            <div>Team Icon:<span><img src=${teams[j].url}></span></div>
            <div>Player Count:<span>${count}</span></div>
            <div>Top Batsman:<span>${bat}</span></div>
            <div>Top Bowler:<span>${bow}</span></div>
            <div>Won Count:<span>${Math.floor(Math.random() * 5) + 1
            }</span></div>`;
        break;
    }
}
