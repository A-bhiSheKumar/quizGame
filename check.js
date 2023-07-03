var duration = 5; // 30 seconds
var timerElement = document.getElementById('timer');
var questionElement = document.getElementById('question');
var questionIndex = 0;
var questions = ["Question 1", "Question 2", "Question 3"]; // Array of questions

function startTimer() {
  // Start the countdown
  var countdown = setInterval(function() {
    var seconds = duration % 60;
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    timerElement.textContent = "00:" + formattedSeconds;

    if (duration <= 0) {
      clearInterval(countdown);
      alert("Time's up!");
      nextQuestion();
    }

    duration--;
  }, 1000);
}

function nextQuestion() {
  // Perform actions to move to the next question
  questionIndex++;

  if (questionIndex < questions.length) {
    questionElement.textContent = questions[questionIndex];
    duration = 5; // Reset the timer for each question
    startTimer();
  } else {
    // Perform actions when all questions are completed
    alert("Quiz completed!");
    // Additional code for showing results or submitting the quiz
  }
}

// Start the timer for the first question
startTimer();
