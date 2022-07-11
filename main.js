let displayValue = '0';
let firstNumber = null;
let checkSecondNumber = false;
let selectOperator = null;

function operate(num1, num2, mathOperator) {
    if (mathOperator === "+") {
        return num1 + num2;
    } else if (mathOperator === "-") {
        return num1 - num2;
    } else if (mathOperator === "*") {
        return num1 * num2;
    } else if (mathOperator === "/") {
        return num1 / num2;
    }
    return num2;
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
        inputOperator(target.value)
        populateDisplay();
        return;
    } else if (target.classList.contains("decimal-button")) {
        inputDecimal(target.value);
        populateDisplay();
        return;
    } else if (target.classList.contains("clear-button")) {
        clearCalculator();
        populateDisplay();
        return;
    } else if (target.classList.contains("delete-button")) {
        displayValue = displayValue.slice(0, -1);
        populateDisplay();
        return;
    }
        inputNumber(target.value);
        populateDisplay();
});


function inputNumber(number) {
    let inputValue = displayValue;
    if (checkSecondNumber === true) {
        displayValue = number;
        checkSecondNumber = false;
    } else if (inputValue === '0') {
        displayValue = inputValue = number;
    } else {
        displayValue = inputValue + number;
    }   
}

function inputDecimal(decimal) {
    if (checkSecondNumber === true) {
        displayValue = '0.';
        checkSecondNumber = false;
        return;
    }

    if (!displayValue.includes(decimal)) {
        displayValue = displayValue + decimal;
    }
}

function inputOperator(nextOperator) {
    let inputValue = parseFloat(displayValue);

    if (selectOperator && checkSecondNumber) {
        selectOperator = nextOperator;
        return;
    }

    if (firstNumber === null && typeof(inputValue) === 'number') {
        firstNumber = inputValue;
    } else if (selectOperator) {
        let result = operate (firstNumber, inputValue, selectOperator);
        displayValue = parseFloat(result.toFixed(5));
        firstNumber = result;
    }   
        checkSecondNumber = true;
        selectOperator = nextOperator;
}

function clearCalculator() {
    displayValue = '0';
    firstNumber = null;
    checkSecondNumber = false;
    selectOperator = null;
}