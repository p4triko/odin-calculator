let firstNumber;
let secondNumber;
let operator = "";

const numberButton = document.querySelectorAll(".number-button");
const display = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector(".equal-button");
const clearButton = document.querySelector(".clear-button");
const decimalButton = document.querySelector(".decimal-button");

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
  });
});

operatorButton.forEach((operator) => {
  operator.addEventListener("click", () => {
    display.textContent += operator.textContent;
  });
});

clearButton.addEventListener("click", clearDisplay);

function clearDisplay() {
  display.textContent = "";
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(first, second, operator) {
  let result = 0;
  if (operator === "+") {
    result = add(first, second);
    return result;
  } else if (operator === "-") {
    result = subtract(first, second);
    return result;
  } else if (operator === "*") {
    result = multiply(first, second);
    return result;
  } else if (operator === "/") {
    result = divide(first, second);
    return result;
  }
}
