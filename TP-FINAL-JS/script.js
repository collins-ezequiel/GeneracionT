const words = [
    'californication', 'plataforma5', 'black', 'summer', 'flea',
    'aeroplane', 'peppers', 'unlimited', 'arcadium', 'love',
    'getaway', 'stadium', 'quixoticelixer', 'quarter', 'snow',
    'dylan', 'zephyr', 'funky', 'chili'
];

const randomWordElement = document.getElementById("randomWord");
const textInput = document.getElementById("text");
const timeSpan = document.getElementById("timeSpan");
const scoreElement = document.getElementById("score");
const endGameContainer = document.getElementById("end-game-container");
const mainContainer = document.querySelector(".main");

let palabraAleatoria;
let time = 10;
let score = 0;
let timeInterval;

// Función para obtener una palabra random
function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
}

// Función para mostrar la palabra en el DOM
function addToDOM() {
    palabraAleatoria = randomWords();
    randomWordElement.innerText = palabraAleatoria;
}

// Evento input para comparar lo ingresado
textInput.addEventListener("input", function (e) {
    const palabraIngresada = e.target.value;
    if (palabraIngresada === palabraAleatoria) {
        updateScore();
        addToDOM();
        e.target.value = "";
        time += 3;
        updateTimeOnScreen();
    }
});

// Función para actualizar el tiempo
function actualizarTiempo() {
    timeInterval = setInterval(() => {
        time--;
        updateTimeOnScreen();

        if (time === 0) {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
}

function updateTimeOnScreen() {
    timeSpan.innerText = `${time}s`;
}

// Función para actualizar el score
function updateScore() {
    score++;
    scoreElement.innerText = score;
}

// Función de fin del juego
function gameOver() {
    mainContainer.remove();
    endGameContainer.innerHTML = `
    <h1>⏰ Tiempo terminado</h1>
    <p>Score final: ${score}</p>
    <button onclick="window.location.reload()">Reiniciar</button>
  `;
}

// Inicialización del juego
addToDOM();
actualizarTiempo();
