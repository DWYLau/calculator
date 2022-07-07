let displayValue = '0';
let firstNumber = "";
let secondNumber = "";
let operator = "";

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

function operate(operand1, operand2) {
    operator = ["+","-","/","*"];
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

function populateDisplay() {
    const display = document.querySelector(".calculator-display");
    display.value = displayValue;
}

populateDisplay();

buttons = document.querySelector(".calculator-buttons");
buttons.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.matches("button")) {
        return;
    } else if (target.classList.contains("operator")) {
        console.log("operator", target.value);
        return;
    } else if (target.classList.contains("decimal-button")) {
        inputDecimal(target.value);
        populateDisplay();
        return;
    } else if (target.classList.contains("clear-button")) {
        console.log("clear", target.value);
        return;
    } 
        inputNumber(target.value);
        populateDisplay();
});


function inputNumber(number) {
    let inputValue = displayValue;
    if (inputValue === '0') {
        displayValue = inputValue = number;
    } else {
        displayValue = inputValue + number;
    }
}

function inputDecimal(decimal) {
    if (!displayValue.includes(decimal)) {
        displayValue = displayValue + decimal;
    }
}