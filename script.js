let buttonNumber = document.querySelectorAll('.number');           //number button pressed
let buttonOperator = document.querySelectorAll('.operator');           //operator button pressed
let buttonEquals = document.querySelector('.equals');           //equals button pressed
let buttonClear = document.querySelector('.clear');         //clear button
let buttonDecimal = document.querySelector('.decimal');         //decimal button
let totalDisplay = document.querySelector('.totalDisplay');
let backspace = document.querySelector('.backspace');           //backspace button
let displayValue = '';           //number that appears on the screen when pressing buttons
let display = document.querySelector('.display');
let firstInput = 0;
let secondInput = 0;
let operatorInput = '';
let displayOperator;
let decimalCheck = 0;
let output;

window.addEventListener("keydown", function (e) {           //adding keyboard input
    if (e.key >= 0 && e.key <= 9) {         //if numbers pressed between 0-9
        input(e.key);
    }
    else if (e.key === "Escape") {          //pressing escape to clear
        clear();
    }
    else if (e.key === "Enter" || e.key === "=") {          //pressing Enter or = to give the fianl output
        equals();
    }
    else if (e.key === ".") {           //can't include more than one decimal in a single input
        inputDecimal(e.key);
    }
    else if (e.key === "/" || e.key === "*" || e.key === "-" || e.key === "+") {            //pressing any operator
        e.preventDefault();         //avoids opening quick find in mozilla, used to override default browser functions
        inputOperator(e.key);
    }
    else if(e.key === "Backspace"){
        backscpace();
    }
});

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

function input(ele) {
    if (operatorInput === '') {           //checking if this is the first input
        displayValue += ele;           //add new number to the end of the list
        display.textContent = displayValue;         //change display according to the numbers pressed 
        firstInput = displayValue;          //storing the value of first input
    }
    else {
        displayValue += ele;           //add new number to the end of the list
        display.textContent = displayValue;         //change display according to the numbers pressed 
        secondInput = displayValue;            //storing the value of second input
    }
}

function inputDecimal(ele) {
    if (decimalCheck === 0) {
        if (operatorInput === '') {           //checking if this is the first input
            displayValue += ele;           //add new number to the end of the list
            display.textContent = displayValue;         //change display according to the numbers pressed 
            firstInput = displayValue;          //storing the value of first input
            decimalCheck = 1;
        }
        else {
            displayValue += ele;           //add new number to the end of the list
            display.textContent = displayValue;         //change display according to the numbers pressed 
            secondInput = displayValue;            //storing the value of second input
            decimalCheck = 1;
        }
    }
}

function inputOperator(ele) {
    decimalCheck = 0;
    totalDisplay.textContent = `${firstInput} ${ele} `;             //secondary dispaly to display the entire calculation
    if (firstInput != "" && secondInput != "") {         //if the first and second input have been entered once
        firstInput = +operate(operatorInput, firstInput, secondInput);          //new value of first input after second operator has been pressed
        totalDisplay.textContent = `${firstInput} ${ele} `;
    }
    displayValue = '';
    displayOperator = ele;
    display.textContent = displayOperator;         //change display according to the operator pressed 
    operatorInput = displayOperator;
}

function clear() {          //function to clear the screen
    displayValue = '';
    display.textContent = displayValue;
    firstInput = '';
    secondInput = '';
    operatorInput = '';
    totalDisplay.textContent = '';
}

function equals(){
    operate(operatorInput, firstInput, secondInput);
    totalDisplay.textContent = `${firstInput} ${operatorInput} ${secondInput} =`;           //displaying the entire calculations so far
    secondInput = '';           //we no longer want these values to be used
    operatorInput = '';         // ""
}

function backscpace(){
    display.textContent = display.textContent.slice( 0 , -1);         //using slice to remove the last digit
    displayValue = display.textContent;

    if (operatorInput === '') {           //checking if this is the first input
        firstInput = displayValue;          //storing the value of first input
    }
    else {
        secondInput = displayValue;            //storing the value of second input
    }
}

buttonNumber.forEach(buttonOne => {         //event lisetener to catch and store each number pressed
    buttonOne.addEventListener("click", function () {
        input(this.textContent);
    })
});


buttonDecimal.addEventListener("click", function () {           //can't include more than one decimal in a single input
    inputDecimal(this.textContent);
});

buttonOperator.forEach(buttonOne => {           //event lisetener to catch and store each operator pressed
    buttonOne.addEventListener("click", function () {
        inputOperator(this.textContent);
    })
});

buttonEquals.addEventListener("click", function () {          //function to find and display the desired output using operate()
    equals();
});

buttonClear.addEventListener("click", clear);           //event listener for clear button

backspace.addEventListener("click", function(){         //event listener to remove the last digit of the input || backscpace event listener
    backscpace();
});