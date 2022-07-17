TOP Calculator Project

Logic

1. Add two or more numbers (any number of digits) using number buttons on the calculator.
2. Perform math functions, e.g. addition, subtraction, multiplication and division on the numbers.
3. Calculator should be able to perform and calculate - giving out correct solutions.

Display Elements

1. Button pad.
2. Display of current number(s).
3. Display of previously entered number(s) and selected math operation.

Extra notes:

* Equal button to evaluate answer/solution.
* Clear button to reset calculator.

Methods

* Call HTML with selectors(querySelector + querySelectorAll) and store them in variables.
* Create separate variables for each function.
* Example - variables for display, current number, previously entered number, clearing function.

* Example - calculation of 10 + 20.
1. Call and store 10 first.
2. Create empty variable to hold number as a string. (Use - let currentNumber = "")
3. Convert to number later. (Use - Number(currentNumber))

* Output - Clicking on buttons in calculator.
1. Result/numbers displayed on screen.
2. Method - (Use - button.addEventListener ('click', function))
3. Display should return OR store value of the button clicked.

* Example - clicking "1" number button.
1. Use "if statements" to deteremine if number is equal to 0 or not.
2. If 0 - overwrite 0 with number clicked. e.g 0 ----> 1.
3. If not 0 - append to number with string concatenation. e.g. 1 ----> 11.