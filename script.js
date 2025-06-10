let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const scoreDisplay = document.querySelector('#score');
const highscoreDisplay = document.querySelector('#highscore');
const numberDisplay = document.querySelector('.number');

// Helper function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check button logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('⛔️ No number!');

  // Correct guess
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberDisplay.textContent = secretNumber;
    numberDisplay.classList.add('animate-bounce');
    document.body.style.backgroundColor = '#60b347';
    document.body.classList.add('animate-bg');

    setTimeout(() => {
      numberDisplay.classList.remove('animate-bounce');
      document.body.classList.remove('animate-bg');
    }, 1000);

    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
      highscoreDisplay.classList.add('animate-glow');
      setTimeout(() => highscoreDisplay.classList.remove('animate-glow'), 1000);
    }

  // Wrong guess
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreDisplay.textContent = score;
      scoreDisplay.classList.add('animate-bounce');
      setTimeout(() => scoreDisplay.classList.remove('animate-bounce'), 500);
    } else {
      displayMessage('💥 You lost the game!');
      scoreDisplay.textContent = 0;
    }
  }
});

// "Play Again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreDisplay.textContent = score;
  numberDisplay.textContent = '?';
  document.querySelector('.guess').value = '';

  document.body.style.backgroundColor = '#222';
  numberDisplay.style.width = '100px';
});
window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('introModal');
  const closeBtn = document.getElementById('closeIntro');

  // Show modal only once per visit (or change to localStorage for once forever)
  if (!sessionStorage.getItem('seenIntro')) {
    intro.style.display = 'flex';
    sessionStorage.setItem('seenIntro', 'true');
  }

  closeBtn.addEventListener('click', () => {
    intro.style.display = 'none';
  });
});
if (!localStorage.getItem('seenIntro')) {
  intro.style.display = 'flex';
  localStorage.setItem('seenIntro', 'true');
}
