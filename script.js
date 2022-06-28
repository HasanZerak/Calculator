let buttonNumber = document.querySelectorAll('.number');           //button pressed
let displayValue = '';           //number that appears on the screen when pressing buttons
let display = document.querySelector('.display');            

function add(num1, num2){           //addition function
    return num1 + num2;
}

function sub(num1, num2){           //subtraction function
    return num1 - num2;
}

function prod(num1, num2){          //product function
    return num1 * num2;
}

function div(num1, num2){           //division function
    return num1 / num2;
}

function operate(operator, num1, num2){         //function to take input numbers and operator, and provide output. 
    switch(operator){
        case '+' :
            return add(num1, num2);
            break;
        case '-' :
            return sub(num1, num2);
            break;
        case '*' :
            return prod(num1, num2);
            break;
        case '/' :
            return div(num1, num2);
            break;
        default :
        alert("invalid operator");                 
    }
}

buttonNumber.forEach(buttonOne => {         //event lisetener to catch and store each number pressed
    buttonOne.addEventListener("click", function(){
        displayValue += this.textContent;           //add new number to the end of the previous list
        display.textContent = displayValue;         //change display according to the numbers pressed 
        console.log(displayValue); 
    });
})
