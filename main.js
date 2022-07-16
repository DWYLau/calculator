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

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

