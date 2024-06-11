let firstNumber;
let secondNumber;
let operator = "";

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

console.log(operate(2, 3, "*"));
