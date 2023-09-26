// Iteration 5: Store the player score and display it on the game over screen

let score = localStorage.getItem("score");

var socreBord = document.querySelector("#score-board");

socreBord.innerHTML = score;

const pab = document.getElementById("play-again-button");


pab.onclick = () => {
    location.href = "./game.html";
};