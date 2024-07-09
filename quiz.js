function checkAnswer() {
  let correctAnswer = "4";
  let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  let feedback = document.querySelector("#feedback");
  if (correctAnswer == userAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
