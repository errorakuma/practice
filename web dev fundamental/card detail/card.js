let players = JSON.parse(localStorage.getItem('players')) || [];


let T = window.location.search.split("=")[1];

let team = document.getElementById("carddetails");


console.log(T)
let image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2DXJUwFBubrXsBZIGut2exeBPy8qtfWROQ&usqp=CAU";

for (let i = 0; i < players.length; i++) {
    console.log(players[i])

    if (T == players[i].id) {
        // let next =  + players[i].id;

        let play = players[i].isPlaying == true ? "Active" : "Retired";

        team.innerHTML += `        <div class="product-wrapper">
        <div id="product-image">
            <div class="image-wrapper">
                <img id="product-preview" src="${image}alt" />
            </div>
        </div>
        <div id="product-details">
            <h1 id="product-title">Name: ${players[i].playerName}</h1>
            <h1 id="product-brand">Team: ${players[i].from}</h1>
            <h4 class="section-heading">
                Price:
                <p id="product-price">${players[i].price}</p>
            </h4>
            <h4 class="section-heading">Status: ${play}</h4>
            <p id="description">Role: ${players[i].description}</p>
        </div>
    </div>
`;
    }
}

