// JavaScript code to implement the features of the index.html page

// Get references to the DOM elements that we will need to manipulate
const timerElement = document.getElementById('timer');
const plusButtonElement = document.getElementById('plus-button');
const minusButtonElement = document.getElementById('minus-button');
const likeButtonElement = document.getElementById('like-button');
const commentInputElement = document.getElementById('comment-input');
const commentSubmitButtonElement = document.getElementById('comment-submit-button');
const pauseButtonElement = document.getElementById('pause-button');
const restartButtonElement = document.getElementById('restart-button');

// Create a variable to store the current timer value
let timerValue = 0;

// Start the timer
// This function will be called every second to increment the timer value
function startTimer() {
  timerValue++;
  timerElement.textContent = timerValue;
}

// Start the timer when the page loads
setInterval(startTimer, 1000);

// Implement the plus and minus buttons
plusButtonElement.addEventListener('click', function() {
  timerValue++;
  timerElement.textContent = timerValue;
});

minusButtonElement.addEventListener('click', function() {
  timerValue--;
  timerElement.textContent = timerValue;
});

// Implement the like button
likeButtonElement.addEventListener('click', function() {
  // Get the current number of likes for the current timer value
  const likesCount = parseInt(timerElement.dataset.likes, 10);

  // Increment the number of likes
  likesCount++;

  // Update the DOM to display the new number of likes
  timerElement.dataset.likes = likesCount;
});

// Implement the comment input and submit button
commentInputElement.addEventListener('input', function() {
  // Update the comment preview element with the current value of the comment input
  const commentPreviewElement = document.getElementById('comment-preview');
  commentPreviewElement.textContent = commentInputElement.value;
});

commentSubmitButtonElement.addEventListener('click', function() {
  // Get the current comment value
  const comment = commentInputElement.value;

  // Create a new comment element
  const commentElement = document.createElement('li');
  commentElement.textContent = comment;

  // Add the comment element to the comment list
  const commentListElement = document.getElementById('comment-list');
  commentListElement.appendChild(commentElement);

  // Clear the comment input
  commentInputElement.value = '';
});

// Implement the pause and restart buttons
pauseButtonElement.addEventListener('click', function() {
  // If the timer is currently running, pause it
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;

    // Disable the plus and minus buttons
    plusButtonElement.disabled = true;
    minusButtonElement.disabled = true;

    // Change the label on the pause button to "resume"
    pauseButtonElement.textContent = 'Resume';
  } else {
    // If the timer is currently paused, resume it
    timerInterval = setInterval(startTimer, 1000);

    // Enable the plus and minus buttons
    plusButtonElement.disabled = false;
    minusButtonElement.disabled = false;

    // Change the label on the pause button to "pause"
    pauseButtonElement.textContent = 'Pause';
  }
});

restartButtonElement.addEventListener('click', function() {
  // Reset the timer value
  timerValue = 0;

  // Update the DOM to display the new timer value
  timerElement.textContent = timerValue;

  // Resume the timer
  if (!timerInterval) {
    timerInterval = setInterval(startTimer, 1000);
  }

  // Enable all buttons
  plusButtonElement.disabled = false;
  minusButtonElement.disabled = false;
  pauseButtonElement.disabled = false;
});

// Start the timer
const timerInterval = setInterval(startTimer, 1000);
