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

equalButton.addEventListener("click", () => {
  if (currentValue != "" && previousValue != "") {
    operate();
    let value = operate();
    round(value);
    value = value.toString();
    previousOperation.textContent = "";
    if (value.length <= 10) {
      currentOperation.textContent = value;
    } else {
      currentOperation.textContent = value.slice(0, 5) + "...";
    }
    currentValue = value;
    console.log(value);
  }
});

decimalButton.addEventListener("click", () => {
  addDecimal();
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

function addDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
  }
}
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

function operate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    return add(previousValue, currentValue);
  } else if (operator === "-") {
    return subtract(previousValue, currentValue);
  } else if (operator === "*") {
    return multiply(previousValue, currentValue);
  } else if (operator === "/") {
    return divide(previousValue, currentValue);
  } else {
    return null;
  }
}

function round(number) {
  return Math.round(number * 1000) / 1000;
}
