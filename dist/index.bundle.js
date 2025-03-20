(self["webpackChunktyping_game"] = self["webpackChunktyping_game"] || []).push([["index"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHdCQUF3QixLQUFLOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwaW5nLWdhbWUvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmQnKTtcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpO1xuY29uc3Qgc2NvcmVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuY29uc3QgdGltZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKTtcbmNvbnN0IGVuZGdhbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmQtZ2FtZS1jb250YWluZXInKTtcbmNvbnN0IHNldHRpbmdzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWJ0bicpO1xuY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MnKTtcbmNvbnN0IHNldHRpbmdzRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1mb3JtJyk7XG5jb25zdCBkaWZmaWN1bHR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZpY3VsdHknKTtcblxuLy8gRGVjbGFyYXIgdGltZUludGVydmFsIGFxdcOtXG5sZXQgdGltZUludGVydmFsO1xuXG4vLyBMaXN0IG9mIHdvcmRzIGZvciBnYW1lXG5jb25zdCB3b3JkcyA9IFtcbiAgJ0F5dWRhJywgJ0Nhc2EnLCAnUGVycm8nLCAnR2F0bycsICdMaWJybycsICdDb21wdXRhZG9yYScsICdUZWzDqWZvbm8nLCAnQW1pZ28nLCAnRmFtaWxpYScsICdDb21pZGEnLCAnQWd1YScsICdUcmFiYWpvJywgJ0VzY3VlbGEnLCAnRXN0dWRpbycsICdNw7pzaWNhJywgJ1BlbMOtY3VsYScsICdWaWFqZScsICdDb2NoZScsICdCaWNpY2xldGEnLCAnQ2l1ZGFkJywgJ0NhbXBvJywgJ05hdHVyYWxlemEnLCAnU29sJywgJ0x1bmEnLCAnRXN0cmVsbGEnLCAnVGllbXBvJywgJ1JlbG9qJywgJ0RpbmVybycsICdTYWx1ZCcsICdFamVyY2ljaW8nLCAnUmlzYScsICdMbHV2aWEnLCAnTmlldmUnLCAnQ2Fsb3InLCAnRnLDrW8nLCAnQW1vcicsICdQYXonLCAnRmVsaWNpZGFkJywgJ1N1ZcOxbycsICdFbmVyZ8OtYScsXG5dO1xuXG4vLyBJbml0IHdvcmRcbmxldCByYW5kb21Xb3JkO1xuXG4vLyBJbml0IHNjb3JlXG5sZXQgc2NvcmUgPSAwO1xuXG4vLyBJbml0IHRpbWVcbmxldCB0aW1lID0gMTA7XG5cbi8vIFNldCBkaWZmaWN1bHR5IHRvIHZhbHVlIGluIGxzIG9yIG1lZGl1bVxubGV0IGRpZmZpY3VsdHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGlmZmljdWx0eScpICE9PSBudWxsXG4gID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RpZmZpY3VsdHknKVxuICA6ICdtZWRpdW0nO1xuXG4vLyBTZXQgZGlmZmljdWx0eSBzZWxlY3QgdmFsdWVcbmRpZmZpY3VsdHlTZWxlY3QudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGlmZmljdWx0eScpICE9PSBudWxsXG4gID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RpZmZpY3VsdHknKVxuICA6ICdtZWRpdW0nO1xuXG4vLyBGb2N1cyBvbiB0ZXh0IG9uIHN0YXJ0XG50ZXh0LmZvY3VzKCk7XG5cbi8vIEdhbWUgb3Zlciwgc2hvdyBlbmQgc2NyZWVuXG5mdW5jdGlvbiBnYW1lT3ZlcigpIHtcbiAgZW5kZ2FtZUVsLmlubmVySFRNTCA9IGBcbiAgICA8aDE+VGltZSByYW4gb3V0PC9oMT5cbiAgICA8cD5Zb3VyIGZpbmFsIHNjb3JlIGlzICR7c2NvcmV9PC9wPlxuICAgIDxidXR0b24gb25jbGljaz1cImxvY2F0aW9uLnJlbG9hZCgpXCI+UmVsb2FkPC9idXR0b24+XG4gIGA7XG5cbiAgZW5kZ2FtZUVsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59XG5cbi8vIFVwZGF0ZSB0aW1lXG5mdW5jdGlvbiB1cGRhdGVUaW1lKCkge1xuICB0aW1lIC09IDE7IC8vIENvcnJlZ2lkbzogUmVlbXBsYXphZG8gdGltZS0tIGNvbiB0aW1lIC09IDFcbiAgdGltZUVsLmlubmVySFRNTCA9IGAke3RpbWV9c2A7XG5cbiAgaWYgKHRpbWUgPT09IDApIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVJbnRlcnZhbCk7XG4gICAgLy8gRW5kIGdhbWVcbiAgICBnYW1lT3ZlcigpO1xuICB9XG59XG5cbi8vIFN0YXJ0IGNvdW50aW5nIGRvd25cbnRpbWVJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWUsIDEwMDApO1xuXG4vLyBHZW5lcmF0ZSByYW5kb20gd29yZCBmcm9tIGFycmF5XG5mdW5jdGlvbiBnZXRSYW5kb21Xb3JkKCkge1xuICByZXR1cm4gd29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd29yZHMubGVuZ3RoKV07XG59XG5cbi8vIEFkZCB3b3JkIHRvIERPTVxuZnVuY3Rpb24gYWRkV29yZFRvRE9NKCkge1xuICByYW5kb21Xb3JkID0gZ2V0UmFuZG9tV29yZCgpO1xuICB3b3JkLmlubmVySFRNTCA9IHJhbmRvbVdvcmQ7XG59XG5cbi8vIFVwZGF0ZSBzY29yZVxuZnVuY3Rpb24gdXBkYXRlU2NvcmUoKSB7XG4gIHNjb3JlICs9IDE7IC8vIENvcnJlZ2lkbzogUmVlbXBsYXphZG8gc2NvcmUrKyBjb24gc2NvcmUgKz0gMVxuICBzY29yZUVsLmlubmVySFRNTCA9IHNjb3JlO1xufVxuXG5hZGRXb3JkVG9ET00oKTtcblxuLy8gRXZlbnQgbGlzdGVuZXJzXG5cbi8vIFR5cGluZ1xudGV4dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gIGNvbnN0IGluc2VydGVkVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gIGlmIChpbnNlcnRlZFRleHQgPT09IHJhbmRvbVdvcmQpIHtcbiAgICBhZGRXb3JkVG9ET00oKTtcbiAgICB1cGRhdGVTY29yZSgpO1xuXG4gICAgLy8gQ2xlYXJcbiAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuXG4gICAgaWYgKGRpZmZpY3VsdHkgPT09ICdoYXJkJykge1xuICAgICAgdGltZSArPSAyO1xuICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgIHRpbWUgKz0gMztcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZSArPSA1O1xuICAgIH1cblxuICAgIHVwZGF0ZVRpbWUoKTtcbiAgfVxufSk7XG5cbi8vIFNldHRpbmdzIGJ0biBjbGlja1xuc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXR0aW5ncy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJykpO1xuXG4vLyBTZXR0aW5ncyBzZWxlY3RcbnNldHRpbmdzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICBkaWZmaWN1bHR5ID0gZS50YXJnZXQudmFsdWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkaWZmaWN1bHR5JywgZGlmZmljdWx0eSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=