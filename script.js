let firstNumber = "";
let secondNumber = "";
let operator = "";

let operationArray = new Array(3);

let hasClickedOperator = false;
let operatorMode = false;

const numberButton = document.querySelectorAll(".number-button");
const display = document.querySelector(".display");
const operatorButton = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector(".equal-button");
const clearButton = document.querySelector(".clear-button");

numberButton.forEach((button) => {
  button.addEventListener("click", appendNumber);
});

operatorButton.forEach((button) => {
  button.addEventListener("click", appendOperator);
});

equalButton.addEventListener(
  "click",
  operate(firstNumber, secondNumber, operator)
);

clearButton.addEventListener("click", clearDisplay);

function appendNumber(event) {}

function appendOperator(event) {}

function clearDisplay() {
  display.textContent = null;
  firstNumber = null;
  secondNumber = null;
  operator = null;
  hasClickedOperator = false;
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
