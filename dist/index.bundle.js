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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isd0JBQXdCLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGluZy1nYW1lLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JkJyk7XHJcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpO1xyXG5jb25zdCBzY29yZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcbmNvbnN0IHRpbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJyk7XHJcbmNvbnN0IGVuZGdhbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmQtZ2FtZS1jb250YWluZXInKTtcclxuY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3MtYnRuJyk7XHJcbmNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzJyk7XHJcbmNvbnN0IHNldHRpbmdzRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5ncy1mb3JtJyk7XHJcbmNvbnN0IGRpZmZpY3VsdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlmZmljdWx0eScpO1xyXG5cclxuLy8gRGVjbGFyYXIgdGltZUludGVydmFsIGFxdcOtXHJcbmxldCB0aW1lSW50ZXJ2YWw7XHJcblxyXG4vLyBMaXN0IG9mIHdvcmRzIGZvciBnYW1lXHJcbmNvbnN0IHdvcmRzID0gW1xyXG4gICdBeXVkYScsICdDYXNhJywgJ1BlcnJvJywgJ0dhdG8nLCAnTGlicm8nLCAnQ29tcHV0YWRvcmEnLCAnVGVsw6lmb25vJywgJ0FtaWdvJywgJ0ZhbWlsaWEnLCAnQ29taWRhJywgJ0FndWEnLCAnVHJhYmFqbycsICdFc2N1ZWxhJywgJ0VzdHVkaW8nLCAnTcO6c2ljYScsICdQZWzDrWN1bGEnLCAnVmlhamUnLCAnQ29jaGUnLCAnQmljaWNsZXRhJywgJ0NpdWRhZCcsICdDYW1wbycsICdOYXR1cmFsZXphJywgJ1NvbCcsICdMdW5hJywgJ0VzdHJlbGxhJywgJ1RpZW1wbycsICdSZWxvaicsICdEaW5lcm8nLCAnU2FsdWQnLCAnRWplcmNpY2lvJywgJ1Jpc2EnLCAnTGx1dmlhJywgJ05pZXZlJywgJ0NhbG9yJywgJ0Zyw61vJywgJ0Ftb3InLCAnUGF6JywgJ0ZlbGljaWRhZCcsICdTdWXDsW8nLCAnRW5lcmfDrWEnLFxyXG5dO1xyXG5cclxuLy8gSW5pdCB3b3JkXHJcbmxldCByYW5kb21Xb3JkO1xyXG5cclxuLy8gSW5pdCBzY29yZVxyXG5sZXQgc2NvcmUgPSAwO1xyXG5cclxuLy8gSW5pdCB0aW1lXHJcbmxldCB0aW1lID0gMTA7XHJcblxyXG4vLyBTZXQgZGlmZmljdWx0eSB0byB2YWx1ZSBpbiBscyBvciBtZWRpdW1cclxubGV0IGRpZmZpY3VsdHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGlmZmljdWx0eScpICE9PSBudWxsXHJcbiAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGlmZmljdWx0eScpXHJcbiAgOiAnbWVkaXVtJztcclxuXHJcbi8vIFNldCBkaWZmaWN1bHR5IHNlbGVjdCB2YWx1ZVxyXG5kaWZmaWN1bHR5U2VsZWN0LnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RpZmZpY3VsdHknKSAhPT0gbnVsbFxyXG4gID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RpZmZpY3VsdHknKVxyXG4gIDogJ21lZGl1bSc7XHJcblxyXG4vLyBGb2N1cyBvbiB0ZXh0IG9uIHN0YXJ0XHJcbnRleHQuZm9jdXMoKTtcclxuXHJcbi8vIEdhbWUgb3Zlciwgc2hvdyBlbmQgc2NyZWVuXHJcbmZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gIGVuZGdhbWVFbC5pbm5lckhUTUwgPSBgXHJcbiAgICA8aDE+VGltZSByYW4gb3V0PC9oMT5cclxuICAgIDxwPllvdXIgZmluYWwgc2NvcmUgaXMgJHtzY29yZX08L3A+XHJcbiAgICA8YnV0dG9uIG9uY2xpY2s9XCJsb2NhdGlvbi5yZWxvYWQoKVwiPlJlbG9hZDwvYnV0dG9uPlxyXG4gIGA7XHJcblxyXG4gIGVuZGdhbWVFbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG59XHJcblxyXG4vLyBVcGRhdGUgdGltZVxyXG5mdW5jdGlvbiB1cGRhdGVUaW1lKCkge1xyXG4gIHRpbWUgLT0gMTsgLy8gQ29ycmVnaWRvOiBSZWVtcGxhemFkbyB0aW1lLS0gY29uIHRpbWUgLT0gMVxyXG4gIHRpbWVFbC5pbm5lckhUTUwgPSBgJHt0aW1lfXNgO1xyXG5cclxuICBpZiAodGltZSA9PT0gMCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lSW50ZXJ2YWwpO1xyXG4gICAgLy8gRW5kIGdhbWVcclxuICAgIGdhbWVPdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdGFydCBjb3VudGluZyBkb3duXHJcbnRpbWVJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWUsIDEwMDApO1xyXG5cclxuLy8gR2VuZXJhdGUgcmFuZG9tIHdvcmQgZnJvbSBhcnJheVxyXG5mdW5jdGlvbiBnZXRSYW5kb21Xb3JkKCkge1xyXG4gIHJldHVybiB3b3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3b3Jkcy5sZW5ndGgpXTtcclxufVxyXG5cclxuLy8gQWRkIHdvcmQgdG8gRE9NXHJcbmZ1bmN0aW9uIGFkZFdvcmRUb0RPTSgpIHtcclxuICByYW5kb21Xb3JkID0gZ2V0UmFuZG9tV29yZCgpO1xyXG4gIHdvcmQuaW5uZXJIVE1MID0gcmFuZG9tV29yZDtcclxufVxyXG5cclxuLy8gVXBkYXRlIHNjb3JlXHJcbmZ1bmN0aW9uIHVwZGF0ZVNjb3JlKCkge1xyXG4gIHNjb3JlICs9IDE7IC8vIENvcnJlZ2lkbzogUmVlbXBsYXphZG8gc2NvcmUrKyBjb24gc2NvcmUgKz0gMVxyXG4gIHNjb3JlRWwuaW5uZXJIVE1MID0gc2NvcmU7XHJcbn1cclxuXHJcbmFkZFdvcmRUb0RPTSgpO1xyXG5cclxuLy8gRXZlbnQgbGlzdGVuZXJzXHJcblxyXG4vLyBUeXBpbmdcclxudGV4dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgY29uc3QgaW5zZXJ0ZWRUZXh0ID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gIGlmIChpbnNlcnRlZFRleHQgPT09IHJhbmRvbVdvcmQpIHtcclxuICAgIGFkZFdvcmRUb0RPTSgpO1xyXG4gICAgdXBkYXRlU2NvcmUoKTtcclxuXHJcbiAgICAvLyBDbGVhclxyXG4gICAgZS50YXJnZXQudmFsdWUgPSAnJztcclxuXHJcbiAgICBpZiAoZGlmZmljdWx0eSA9PT0gJ2hhcmQnKSB7XHJcbiAgICAgIHRpbWUgKz0gMjtcclxuICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gJ21lZGl1bScpIHtcclxuICAgICAgdGltZSArPSAzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGltZSArPSA1O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRpbWUoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gU2V0dGluZ3MgYnRuIGNsaWNrXHJcbnNldHRpbmdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0dGluZ3MuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpKTtcclxuXHJcbi8vIFNldHRpbmdzIHNlbGVjdFxyXG5zZXR0aW5nc0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICBkaWZmaWN1bHR5ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RpZmZpY3VsdHknLCBkaWZmaWN1bHR5KTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9