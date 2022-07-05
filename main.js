let displayValue = '0';
let firstNumber = null;
let secondNumber = false;
let operator = null;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operand1, operand2 ) {
    let operator = ["+","-","/","*"];
    if (operator === "+") {
        add(operand1, operand2);
    } else if (operator === "-") {
        subtract(operand1, operand2);
    } else if (operator === "*") {
        multiply(operand1, operand2);
    } else {
        divide(operand1, operand2);
    }
}

function inputNumber() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => button.addEventListener('click', () => {
        if (button.value) {
            firstNumber = button.value;
            displayValue = firstNumber;
        }
    })
    );
}

function populateDisplay() {
    const display = document.querySelector(".calculator-display");
    display.value = displayValue;
}

populateDisplay();