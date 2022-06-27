function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function prod(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
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