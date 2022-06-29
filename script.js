let buttonNumber = document.querySelectorAll('.number');           //number button pressed
let buttonOperator = document.querySelectorAll('.operator');           //operator button pressed
let buttonEquals = document.querySelector('.equals');           //equals button pressed
let displayValue = '';           //number that appears on the screen when pressing buttons
let display = document.querySelector('.display');
let operatorCheck = 0;
let firstInput = 0;
let secondInput = 0;
let operatorInput;
let nextFirstInput
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
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return sub(num1, num2);
            break;
        case '*':
            return prod(num1, num2);
            break;
        case '/':
            return div(num1, num2);
            break;
        default:
            alert("invalid operator");
    }
}

buttonEquals.addEventListener("click", function () {          //function to find and display the desired output using operate()
    display.textContent = nextFirstInput;
});

buttonNumber.forEach(buttonOne => {         //event lisetener to catch and store each number pressed
    buttonOne.addEventListener("click", function () {
        if (operatorCheck === 0) {
            displayValue += this.textContent;           //add new number to the end of the previous list
            display.textContent = displayValue;         //change display according to the numbers pressed 
            firstInput = displayValue;
        }
        else {
            displayValue += this.textContent;           //add new number to the end of the previous list
            display.textContent = displayValue;         //change display according to the numbers pressed  
            secondInput = displayValue;

            nextFirstInput = operate(operatorInput, firstInput, secondInput);           //calculating the output of first two input and storing it for next operation 
            firstInput = nextFirstInput;
            display.textContent = firstInput;
        }
    });
});

buttonOperator.forEach(buttonOne => {         //event lisetener to catch and store each operator pressed
    buttonOne.addEventListener("click", function () {
        displayValue = this.textContent;           //print the operator
        display.textContent = displayValue;         //change display according to the operator pressed 
        operatorInput = displayValue;

        displayValue = '';          //clearing the screen to display second input
        operatorCheck = 1;          //buttonNumber will now enter the else statement and store the second input
    });
});