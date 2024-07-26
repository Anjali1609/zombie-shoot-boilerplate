// Iteration 1: Declare variables required for this game

// game.js
let score = 0;
let lives = 3;
let timeLeft = 60;
let gameInterval;
let zombieInterval;


// Iteration 1.2: Add shotgun sound

const shotgunSound = new Audio('./assets/shotgun-sound.mp3');

// Iteration 1.3: Add background sound

const bgSound = new Audio('./assets/background-music.mp3');
bgSound.loop = true;
bgSound.play();

// Iteration 1.4: Add lives

<div id="max-lives">
    <div id="lives">Lives: 3</div>
</div>

// Iteration 2: Write a function to make a zombie

function createZombie() {
    const zombie = document.createElement('div');
    zombie.classList.add('zombie');
    zombie.style.top = `${getRandomInt(0, window.innerHeight - 100)}px`;
    zombie.style.left = `${getRandomInt(0, window.innerWidth - 100)}px`;
    zombie.onclick = shootZombie;
    document.body.appendChild(zombie);
}


// Iteration 3: Write a function to check if the player missed a zombie

function checkMissedZombies() {
    const zombies = document.querySelectorAll('.zombie');
    zombies.forEach(zombie => {
        if (zombie.offsetTop >= window.innerHeight) {
            missZombie(zombie);
        }
    });
}


// Iteration 4: Write a function to destroy a zombie when it is shot or missed

function shootZombie(event) {
    shotgunSound.play();
    score += 10;
    event.target.remove();
}

function missZombie(zombie) {
    lives -= 1;
    document.getElementById('lives').innerText = `Lives: ${lives}`;
    if (lives === 0) {
        endGame();
    }
    zombie.remove();
}


// Iteration 5: Creating timer

function startTimer() {
    gameInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft -= 1;
            document.getElementById('timer').innerText = timeLeft;
        } else {
            endGame();
        }
    }, 1000);
}


// Iteration 6: Write a code to start the game by calling the first zombie

function startGame() {
    startTimer();
    zombieInterval = setInterval(createZombie, 2000);
}

window.onload = startGame;


// Iteration 7: Write the helper function to get random integer

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

