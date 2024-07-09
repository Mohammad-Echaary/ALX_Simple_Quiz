function checkAnswer() {
  let correctAnswer = "4";
  let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  let feedback = document.querySelector("#feedback");
  feedback.textContent =
    correctAnswer == userAnswer
      ? "Correct! Well done."
      : "That's incorrect. Try again!";
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
