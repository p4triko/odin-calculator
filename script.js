const numberButton = document.querySelectorAll(".number-button");
const operatorButton = document.querySelectorAll(".operator-button");

const clearButton = document.querySelector(".clear-button");
const equalButton = document.querySelector(".equal-button");
const deleteButton = document.querySelector(".delete-button");
const decimalButton = document.querySelector(".decimal-button");
const currentOperation = document.querySelector(".current-operation");
const previousOperation = document.querySelector(".previous-operation");

let previousValue = "";
let currentValue = "";
let operator = "";

numberButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    appendNumber(event.target.textContent);
    currentOperation.textContent = currentValue;
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    appendOperator(event.target.textContent);
    previousOperation.textContent = previousValue + "" + operator;
    currentOperation.textContent = currentValue;
  });
});

function appendNumber(number) {
  if (currentValue.length <= 10) {
    currentValue += number;
  }
}

function appendOperator(operation) {
  operator = operation;
  previousValue = currentValue;
  currentValue = "";
}

function compute() {}

function updateDisplay() {}

function deleteOperation() {}

clearButton.addEventListener("click", clear);

function clear() {
  previousValue = "";
  currentValue = "";
  operator = "";
  previousOperation.textContent = currentValue;
  currentOperation.textContent = currentValue;
  console.log("Cleared");
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
  if (operator === "+") {
    return add(first, second);
  } else if (operator === "-") {
    return subtract(first, second);
  } else if (operator === "*") {
    return multiply(first, second);
  } else if (operator === "/") {
    return divide(first, second);
  } else {
    return null;
  }
}

// numberButton.forEach((button) => {
//   button.addEventListener("click", appendNumber);
// });

// operatorButton.forEach((button) => {
//   button.addEventListener("click", appendOperator);
// });

// // deleteButton.addEventListener("click");

// clearButton.addEventListener("click", clearDisplay);

// function appendNumber(number) {
//   currentDisplay = display.textContent.slice(1);
//   display.textContent += number.target.textContent;
//   hasEnteredFirstNumber = true;
// }

// function appendOperator(opr) {
//   if (
//     display.textContent.includes("+") ||
//     display.textContent.includes("-") ||
//     display.textContent.includes("*") ||
//     display.textContent.includes("/")
//   ) {
//     return;
//   } else if (display.textContent === "") {
//     display.textContent += "";
//   } else {
//     firstNumber = display.textContent;
//     display.textContent = opr.target.textContent;
//     operator = opr.target.textContent;
//     hasEnteredOperator = true;
//     console.log(firstNumber);
//     console.log(operator);
//   }
// }

// function clearDisplay() {
//   display.textContent = "";
//   firstNumber = "";
//   secondNumber = "";
//   operator = "";
//   hasEnteredOperator = false;
//   hasEnteredFirstNumber = false;
//   console.log("CLEARED");
// }
