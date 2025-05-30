const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// Declarar timeInterval aquí
let timeInterval;

// List of words for game
const words = [
  'Ayuda', 'Casa', 'Perro', 'Gato', 'Libro', 'Computadora', 'Teléfono', 'Amigo', 'Familia', 'Comida', 'Agua', 'Trabajo', 'Escuela', 'Estudio', 'Música', 'Película', 'Viaje', 'Coche', 'Bicicleta', 'Ciudad', 'Campo', 'Naturaleza', 'Sol', 'Luna', 'Estrella', 'Tiempo', 'Reloj', 'Dinero', 'Salud', 'Ejercicio', 'Risa', 'Lluvia', 'Nieve', 'Calor', 'Frío', 'Amor', 'Paz', 'Felicidad', 'Sueño', 'Energía',
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty to value in ls or medium
let difficulty = localStorage.getItem('difficulty') !== null
  ? localStorage.getItem('difficulty')
  : 'medium';

// Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null
  ? localStorage.getItem('difficulty')
  : 'medium';

// Focus on text on start
text.focus();

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

// Update time
function updateTime() {
  time -= 1; // Corregido: Reemplazado time-- con time -= 1
  timeEl.innerHTML = `${time}s`;

  if (time === 0) {
    clearInterval(timeInterval);
    // End game
    gameOver();
  }
}

// Start counting down
timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score += 1; // Corregido: Reemplazado score++ con score += 1
  scoreEl.innerHTML = score;
}

addWordToDOM();

// Event listeners

// Typing
text.addEventListener('input', (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium') {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', (e) => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});