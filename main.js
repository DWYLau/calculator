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

function checkInput() {
    buttons = document.querySelector(".calculator-buttons");
    buttons.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.matches("button")) {
            return;
        } else if (target.classList.contains("operator")) {
            console.log("operator", target.value);
            return;
        } else if (target.classList.contains("decimal-button")) {
            console.log("decimal", target.value);
            return;
        } else if (target.classList.contains("clear-button")) {
            console.log("clear", target.value);
            return;
        } else {
        console.log('digit', target.value);
        }
    });
}

checkInput();