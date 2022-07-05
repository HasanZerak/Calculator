let buttonNumber = document.querySelectorAll('.number');           //number button pressed
let buttonOperator = document.querySelectorAll('.operator');           //operator button pressed
let buttonEquals = document.querySelector('.equals');           //equals button pressed
let buttonClear = document.querySelector('.clear');         //clear button
let buttonDecimal = document.querySelector('.decimal');         //decimal button
let displayValue = '';           //number that appears on the screen when pressing buttons
let display = document.querySelector('.display');
let firstInput = 0;
let secondInput = 0;
let operatorInput = '';
let displayOperator;
let decimalCheck = 0;
let output;

function add(num1, num2) {           //addition function
    return +num1 + +num2;
}

function sub(num1, num2) {           //subtraction function
    return +num1 - +num2;
}

function prod(num1, num2) {          //product function
    return +num1 * +num2;
}

function div(num1, num2) {           //division function
    return +num1 / +num2;
}

function operate(operator, num1, num2) {         //function to take input numbers and operator, and provide output. 
    switch (operator) {
        case '+':           //add
            output = add(num1, num2);
            display.textContent = +output.toFixed(5);
            return output;
        case '-':           //subtract
            output = sub(num1, num2);
            display.textContent = +output.toFixed(5);
            return output;
        case '*':           //multiply
            output = prod(num1, num2);
            display.textContent = +output.toFixed(5);
            return +output;
        case '/':           //divide
            output = div(num1, num2);
            if (output === Infinity) {
                display.textContent = "ERROR";
            }
            else {
                display.textContent = +output.toFixed(5);
                return output;
            }
            break;
        default:
            alert("invalid operator");
    }
}

buttonNumber.forEach(buttonOne => {         //event lisetener to catch and store each number pressed
    buttonOne.addEventListener("click", function () {
        if (operatorInput === '') {           //checking if this is the first input
            displayValue += this.textContent;           //add new number to the end of the list
            display.textContent = displayValue;         //change display according to the numbers pressed 
            firstInput = displayValue;          //storing the value of first input
        }
        else {
            displayValue += this.textContent;           //add new number to the end of the list
            display.textContent = displayValue;         //change display according to the numbers pressed 
            secondInput = displayValue;            //storing the value of second input
        }
    });
});

buttonDecimal.addEventListener("click", function () {
    if (decimalCheck === 0) {
        if (operatorInput === '') {           //checking if this is the first input
            displayValue += this.textContent;           //add new number to the end of the list
            display.textContent = displayValue;         //change display according to the numbers pressed 
            firstInput = displayValue;          //storing the value of first input
            decimalCheck = 1;
        }
        else {
            displayValue += this.textContent;           //add new number to the end of the list
            display.textContent = displayValue;         //change display according to the numbers pressed 
            secondInput = displayValue;            //storing the value of second input
            decimalCheck = 1;
        }
    }
});

buttonOperator.forEach(buttonOne => {           //event lisetener to catch and store each operator pressed
    buttonOne.addEventListener("click", function () {
        decimalCheck = 0;
        if (firstInput != "" && secondInput != "") {         //if the first and second input have been entered once
            firstInput = +operate(operatorInput, firstInput, secondInput);          //new value of first input after second operator has been pressed
        }
        displayValue = '';
        displayOperator = this.textContent;
        display.textContent = displayOperator;         //change display according to the operator pressed 
        operatorInput = displayOperator;
    });
});

buttonEquals.addEventListener("click", function () {          //function to find and display the desired output using operate()
    operate(operatorInput, firstInput, secondInput);
});

buttonClear.addEventListener("click", function () {
    displayValue = '';
    display.textContent = displayValue;
    firstInput = '';
    secondInput = '';
    operatorInput = '';
});