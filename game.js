let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Helper function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// When user clicks "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('⛔️ No number!');

  // Correct guess
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';

    // Add background animation class
    document.body.classList.add('animate-bg');

    // Add bounce animation to score
    const scoreDisplay = document.querySelector('#score');
    scoreDisplay.classList.add('animate-bounce');

    // Remove animation classes after they run
    setTimeout(() => {
      document.body.classList.remove('animate-bg');
      scoreDisplay.classList.remove('animate-bounce');
    }, 1000);

    document.querySelector('.number').style.width = '150px';

    if (score > highscore) {
      highscore = score;
      document.querySelector('#highscore').textContent = highscore;
    }

  // Wrong guess
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('#score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('#score').textContent = 0;
    }
  }
});

// "Play Again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('#score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '100px';
});
