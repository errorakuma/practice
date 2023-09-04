let products = document.getElementById("teams");
let search = document.getElementById("search-box");
let list = [];
let filteredData = [];
let value = "";

function fetchData() {
    list = JSON.parse(localStorage.getItem("teams")) || [];
    for (let i = 0; i < list.length; i++) {
        products.innerHTML += createCard(list[i]);
    }
}

function createCard(teams) {
    return `
    <div class="card">
    <a href="${"./team detail/index.html?p=" + teams.from}">
        <figure class="cardImage">
            <img src="${teams.url}" >
        </figure>
    </a> 
</div>
`;
}

$(document).ready(function () {
    fetchData();
    search.addEventListener("input", function (e) {
        value = e.target.value.toUpperCase();
        filteredData = [];
        if (value == "" && filteredData.length == 0) {
            products.innerHTML = "";
            for (let i = 0; i < list.length; i++) {
                products.innerHTML += createCard(list[i]);
            }
        } else if (value != "") {
            for (let i = 0; i < list.length; i++) {
                if (list[i].from.toUpperCase().includes(value)) {
                    filteredData.push(list[i]);
                }
            }
            if (filteredData.length > 0) {
                products.innerHTML = "";
                for (let i = 0; i < filteredData.length; i++) {
                    products.innerHTML += createCard(filteredData[i]);
                }
            } else {
                products.innerHTML = "<h1>No products found</h1>";
            }
        }
    });
});
