let score = 0;
let player = "";
let timeLeft = 30;
let gameInterval;
let timerInterval;

// Balls & Fruits
const items = ["⚽","🏀","🏈","🍎","🍊","🍓","🍉","🥝"];

function startGame() {
    player = document.getElementById("playerName").value;

    if(player === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById("startScreen").style.display = "none";

    updateScore();
    updateTimer();

    gameInterval = setInterval(createItem, 1000);
    timerInterval = setInterval(countDown, 1000);
}

function updateScore() {
    document.getElementById("scoreBoard").innerText =
        player + " | Score: " + score;
}

function updateTimer() {
    document.getElementById("timer").innerText =
        "Time: " + timeLeft + "s";
}

function countDown() {
    timeLeft--;
    updateTimer();

    if(timeLeft <= 0) {
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        alert("Game Over " + player + "! Your Score: " + score);
        location.reload();
    }
}

function createItem() {
    let item = document.createElement("div");
    item.classList.add("item");

    item.innerText = items[Math.floor(Math.random() * items.length)];

    item.style.left = Math.random() * window.innerWidth + "px";
    item.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(item);

    item.onclick = function () {
        score++;
        updateScore();
        item.remove();
    };

    setTimeout(() => {
        item.remove();
    }, 3000);
}
