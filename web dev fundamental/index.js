$(document).ready(function () {
    let tea = [
        {
            from: "MI",
            url: "https://i.pinimg.com/originals/29/2b/d5/292bd5c291ff709c415928ff94454259.png",
        },

        {
            from: "RR",

            url: "https://static.toiimg.com/thumb/msid-77990255,width-1280,resizemode-4/77990255.jpg",
        },

        {
            from: "CSK",

            url: "https://logowik.com/content/uploads/images/chennai-super-kings3461.jpg",
        },
    ];

    localStorage.setItem("team", JSON.stringify(tea));
    //

    let usert = JSON.parse(localStorage.getItem("team")) || [];

    if (localStorage.getItem("teams") === null) {
        localStorage.setItem("teams", JSON.stringify(usert));
    }

    let players = [
        {
            id: 0,
            playerName: "Hardik Pandya",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: true,
            description: "All-rounder",
        },
        {
            id: 1,
            playerName: "Virat Kohli",
            from: "CSK",
            price: "8.00 Cr",
            isPlaying: true,
            description: "Batsman",
        },
        {
            id: 2,
            playerName: "Yuvraj Singh",
            from: "MI",
            price: "1.00 Cr",
            isPlaying: false,
            description: "Batsman",
        },
        {
            id: 3,
            playerName: "Chris Morris",
            from: "RR",
            price: "16.25 Cr",
            isPlaying: true,
            description: "All-rounder",
        },
        {
            id: 4,
            playerName: "Glenn Maxwell",
            from: "MI",
            price: "14.25",
            isPlaying: true,
            description: "All-rounder",
        },
        {
            id: 5,
            playerName: "Rohit Sharma",
            from: "MI",
            price: "6.50 Cr",
            isPlaying: true,
            description: "Batsman",
        },
        {
            id: 6,
            playerName: "Ishan Kishan",
            from: "MI",
            price: "2.50 Cr",
            isPlaying: true,
            description: "Batsman",
        },
        {
            id: 7,
            playerName: "MS Dhoni",
            from: "CSK",
            price: "12.00 Cr",
            isPlaying: true,
            description: "wicketkeeper",
        },
        {
            id: 8,
            playerName: "Glenn Maxwell",
            from: "RR",
            price: "14.25",
            isPlaying: true,
            description: "Batsman",
        },
    ];

    localStorage.setItem("player", JSON.stringify(players));
    let userp = JSON.parse(localStorage.getItem("player")) || [];

    if (localStorage.getItem("players") === null) {
        localStorage.setItem("players", JSON.stringify(userp));
    }
});
//

document.getElementById("addTeam").addEventListener("click", function () {
    document.getElementById("formContainer").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("formContainer").classList.add("visible");
    }, 10);
});

document.getElementById("closeButton").addEventListener("click", function () {
    document.getElementById("teamFormt").style.display = "none";
});

document.getElementById("addplayer").addEventListener("click", function () {
    document.getElementById("formContainerplayer").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("formContainerplayer").classList.add("visible");
    }, 10);
});

document.getElementById("closeButtonp").addEventListener("click", function () {
    document.getElementById("teamFormp").style.display = "none";
});

document
    .getElementById("teamFormt")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let usert = JSON.parse(localStorage.getItem("teams")) || [];
        var teamName = document.getElementById("teamName").value.toUpperCase();
        var imageURL = document.getElementById("imageURL").value;
        var teamData = { from: teamName, url: imageURL };

        usert.push(teamData);
        localStorage.setItem("teams", JSON.stringify(usert));
    });

document
    .getElementById("teamFormp")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        let userp = JSON.parse(localStorage.getItem("players")) || [];

        let count = userp.length;
        let playerName = document.getElementById("playerName").value;
        let from = document.getElementById("teamNamep").value.toUpperCase();
        let imageURL = document.getElementById("pimageURL").value;
        let price = document.getElementById("price").value;
        let isPlaying = document.getElementById("isPlaying").value;
        let description = document.getElementById("descrpition").value;

        let playerData = {
            id: count++,
            playerName: playerName,
            from: from,
            imageURL: imageURL,
            price: price,
            isPlaying: isPlaying,
            description: description,
        };

        userp.push(playerData);
        localStorage.setItem("players", JSON.stringify(userp));
        localStorage.setItem("playerCount", count);
    });
