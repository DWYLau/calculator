let displayValue = '0';
let firstNumber = null;
let secondNumber = false;
let selectOperator = null;

function operate(firstOperand, secondOperand, mathOperator) {
    if (mathOperator === "+") {
        return firstOperand + secondOperand;
    } else if (mathOperator === "-") {
        return firstOperand - secondOperand;
    } else if (mathOperator === "*") {
        return firstOperand * secondOperand;
    } else if (mathOperator === "/") {
        return firstOperand / secondOperand;
    }
    return secondOperand;
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
        console.log("clear", target.value);
        return;
    } 
        inputNumber(target.value);
        populateDisplay();
        console.log('displayValue', displayValue);
        console.log('firstNumber', firstNumber);
        console.log('operator', selectOperator);
        console.log('secondNumber', secondNumber);
});


function inputNumber(number) {
    let inputValue = displayValue;
    if (secondNumber === true) {
        displayValue = number;
        secondNumber = false;
    } else if (inputValue === '0') {
        displayValue = inputValue = number;
    } else {
        displayValue = inputValue + number;
    }
    console.log('displayValue', displayValue);
    console.log('firstNumber', firstNumber);
    console.log('operator', selectOperator);
    console.log('secondNumber', secondNumber);
}

function inputDecimal(decimal) {
    if (!displayValue.includes(decimal)) {
        displayValue = displayValue + decimal;
    }
}

function inputOperator(nextOperator) {
    let inputValue = parseFloat(displayValue);
    if (firstNumber === null && typeof(inputValue) === 'number') {
        firstNumber = inputValue;
    } else if (selectOperator) {
        let result = operate (firstNumber, inputValue, selectOperator);
        displayValue = String(result);
        firstNumber = result;
    }   
        secondNumber = true;
        selectOperator = nextOperator;
        console.log('displayValue', displayValue);
        console.log('firstNumber', firstNumber);
        console.log('operator', selectOperator);
        console.log('secondNumber', secondNumber);
}


 