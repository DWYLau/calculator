// storing variables for current display number, previously entered number and operator

let currentNumber = "";
let lastNumber = "";
let operator = "";

// querySelectors for buttons

const historyDisplay = document.querySelector(".calculator-history");
const calcDisplay = document.querySelector(".calculator-display");

const decimalButton = document.querySelector(".decimal-button");

const clearButton = document.querySelector(".clear-button");

const deleteButton = document.querySelector(".delete-button");

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

function inputNumber(number) {
    currentNumber = currentNumber === 0 ? number : currentNumber + number; // if currentNumber === 0 then overwrite 0 with number, if not append number to currentNumber
    calcDisplay.textContent = currentNumber.slice(0, 11); // update calculator display with currentNumber and limit display to 11 numbers
}

function handleOperator(mathOperator) {
    operator = mathOperator; // store operator value from event.target.textContent
    lastNumber = currentNumber; // store lastNumber with used currentNumber for later calculations
    historyDisplay.textContent = lastNumber + " " + operator; // update calculator history with last number entered and last entered operator
    currentNumber = ""; // reset currentNumber to empty string to enter a second number
    calcDisplay.textContent = "0"; // reset calculator display to 0 
}

function operate () {
    lastNumber = parseFloat(lastNumber); // convert to floating point number
    currentNumber = parseFloat(currentNumber); // convert to floating point number

    if (operator === "+") {
        lastNumber = lastNumber + currentNumber;
    }   else if (operator === "-") {
        lastNumber = lastNumber - currentNumber;
    }   else if (operator === "*") {
        lastNumber = lastNumber * currentNumber;
    }   else if (operator === "/") {
        if (currentNumber <= 0) { // secondary check to avoid infinity - cannot divide by 0 or minus number
            lastNumber = 'Error' // display "error" if trying to divide by 0 or minus number
            displayResults();
            return // break out of function
        }
        lastNumber = lastNumber / currentNumber;
    }
    lastNumber = lastNumber.toString(); // convert lastNumber back to string
    displayResults();
}


