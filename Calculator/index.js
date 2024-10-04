"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)("Enter first number: \n");
    var operator = (0, readline_sync_1.question)("Enter operator: \n");
    var secondString = (0, readline_sync_1.question)("Enter second number: \n");
    var op = isOperator(operator);
    console.log(op);
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
