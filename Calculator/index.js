"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)("Enter first number: \n");
    var operator = (0, readline_sync_1.question)("Enter operator: \n");
    var secondString = (0, readline_sync_1.question)("Enter second number: \n");
    var validInput = isNumber(firstString) && isOperator(operator) && isNumber(secondString);
    console.log(validInput);
    if (validInput) {
        console.log("is valid");
        var firstNum = parseInt(firstString);
        var secondNum = parseInt(secondString);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("Invalid Input \n");
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var mayBeNumber = parseInt(str);
    var isNum = !isNaN(mayBeNumber);
    return isNum;
}
main();
