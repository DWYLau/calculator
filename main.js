// declaring variables for currently entered number(s), previously entered number(s) and operator

let currentNumber = "";
let lastNumber = "";
let operator = "";

// querySelectors for displays

const historyDisplay = document.querySelector(".calculator-history");
const calcDisplay = document.querySelector(".calculator-display");

// querySelectors for buttons 

const decimalButton = document.querySelector(".decimal-button");
decimalButton.addEventListener('click', inputDecimal);

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener('click', resetCalculator);

const deleteButton = document.querySelector(".delete-button");
deleteButton.addEventListener('click', deleteNumber);

const equalButton = document.querySelector(".equal-button");
equalButton.addEventListener('click', operate);


// querySelectors + event listeners for number and operator buttons

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => { // listen for "click", fire off "event"
        inputNumber(event.target.textContent);  // event input numbers
    });
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
    button.addEventListener('click', (event) => { // listen for "click", fire off "event"
        handleOperator(event.target.textContent); // event input operators
    });
});


// functions

function inputNumber(number) { // inputting numbers
    currentNumber = currentNumber === 0 ? number : currentNumber + number; // if currentNumber === 0 then overwrite 0 with number, if not append number to currentNumber
    calcDisplay.textContent = currentNumber.slice(0, 12); // update calculator display with currentNumber and limit display to 11 numbers
}

function handleOperator(mathOperator) { // handling and inputting operators
    if (lastNumber === "") { // if lastNumber is empty
        lastNumber = currentNumber; // update lastNumber to currentNumber value
        checkOperator(mathOperator); // checkOperator to overwrite user choice
    }   else if (currentNumber === "") { // if currentNumber is empty
        checkOperator(mathOperator); // checkOperator to overwrite user choice
    } else { // if not
        operate(); // calculate 
        operator = mathOperator; // assign operator value to operator button event target text content
        calcDisplay.textContent = "0"; // reset calculator display to 0
        historyDisplay.textContent = lastNumber + " " + operator; // calculator history will show lastNumber and operator entered
    }
}

function operate() {
    lastNumber = parseFloat(lastNumber);
    currentNumber = parseFloat(currentNumber);

    switch(operator) {
        case '+':
            lastNumber = lastNumber + currentNumber;
            break;
        case '-':
            lastNumber = lastNumber - currentNumber;
            break;
        case '*':
            lastNumber = lastNumber * currentNumber;
            break;
        case '/':
            if (currentNumber <=0) {
                lastNumber = 'ERROR, RESET'
                displayResults();
                return;
            }
            lastNumber = lastNumber / currentNumber;
            break;
    }
    lastNumber = lastNumber.toString();
    displayResults();
}  

function checkOperator(operation) { // overwriting operators if user changes mind
    operator = operation; // update operator value to operation value
    historyDisplay.textContent = lastNumber + " " + operator; // calculator history will show lastNumber and operator
    calcDisplay.textContent = "0"; // reset calculator display to 0
    currentNumber = "" // reset currentNumber to empty
}

function displayResults() { // displaying results of calculations
    if (lastNumber.length <= 12) { // if last number length is less than 12
        calcDisplay.textContent = lastNumber; // assign calculator display to lastNumber value
    } else { // if not then...
        calcDisplay.textContent = lastNumber.slice(0, 12); // assign calculator display to lastNumber value but slice it to 12 numbers
    }
    historyDisplay.textContent = ""; // reset calculator history
    operator = ""; // reset operator for later calculation
    currentNumber = ""; // reset currentNumber for later calculation
}

function inputDecimal() {
    if (!currentNumber.includes(".")) {
        currentNumber += ".";
        calcDisplay.textContent = currentNumber;
    }
}

function resetCalculator() {
    currentNumber = "";
    lastNumber = "";
    operator = "";
    historyDisplay.textContent = "";
    calcDisplay.textContent = "0";
}

function deleteNumber() {
    if (currentNumber !== "") { // if currentNumber is NOT empty
        currentNumber = currentNumber.slice(0, -1); // slice 1 number off at the end
        calcDisplay.textContent = currentNumber; // update calculator display to reflect currentNumber
    } if (currentNumber === "") { // if currentNumber is empty
        calcDisplay.textContent = "0"; // set calculator display to 0
    }
}

// keyboard support

document.addEventListener('keydown', handleKeyboard);

function handleKeyboard(event) {
    event.preventDefault();
    if (event.key >= 00 && event.key <= 9) {
        inputNumber(event.key)
    }
    if (event.key === '=' && currentNum != "" && lastNumber !== "" || event.key === 'Enter') {
        operate();
    }
    if (event.key === "+" || event.key === "-" || event.key === "/" || event.key === "*") {
        handleOperator(event.key)
    } 
    if (event.key === '.') {
        inputDecimal();
    }
    if (event.key === 'Backspace') {
        deleteNumber();
    }
    if (event.key === 'Escape') {
        resetCalculator();
    }
}