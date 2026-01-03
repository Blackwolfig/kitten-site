const kitten = document.getElementById("kitten");
const obstacle = document.getElementById("obstacle");
const scoreText = document.getElementById("score");

let score = 0;
let gameOver = false;

// Прыжок
document.addEventListener("keydown", function (event) {
    if (event.code === "Space" && !kitten.classList.contains("jump")) {
        jump();
    }
});

function jump() {
    kitten.classList.add("jump");
    setTimeout(() => {
        kitten.classList.remove("jump");
    }, 600);
}

// Движение препятствия
setInterval(() => {
    if (gameOver) return;

    let obstacleLeft = obstacle.offsetLeft;

    obstacle.style.left = obstacleLeft - 5 + "px";

    if (obstacleLeft < -40) {
        obstacle.style.left = "600px";
        score++;
        scoreText.innerText = "Счёт: " + score;
    }

    // Проверка столкновения
    let kittenBottom = parseInt(
        window.getComputedStyle(kitten).getPropertyValue("bottom")
    );

    if (obstacleLeft < 90 && obstacleLeft > 50 && kittenBottom < 40) {
        gameOver = true;
        alert("Игра окончена! Счёт: " + score);
        location.reload();
    }
}, 20);
