function add(one, two) {
  return (document.getElementById("calculation-result").textContent =
    +one + +two);
}
function subtract(one, two) {
  return (document.getElementById("calculation-result").textContent =
    +one - +two);
}
function multiply(one, two) {
  return (document.getElementById("calculation-result").textContent =
    +one * +two);
}
function divide(one, two) {
  return (document.getElementById("calculation-result").textContent =
    +one / +two);
}
let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");

document
  .getElementById("add")
  .addEventListener("click", () => add(num1.value, num2.value));
document
  .getElementById("subtract")
  .addEventListener("click", () => subtract(num1.value, num2.value));
document
  .getElementById("multiply")
  .addEventListener("click", () => multiply(num1.value, num2.value));
document
  .getElementById("divide")
  .addEventListener("click", () => divide(num1.value, num2.value));
