"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)("Enter first number: \n");
    var operator = (0, readline_sync_1.question)("Enter operator: \n");
    var secondString = (0, readline_sync_1.question)("Enter second number: \n");
    var firstNum = isNumber(firstString);
    console.log(firstNum);
}
function isNumber(str) {
    var mayBeNumber = parseInt(str);
    var isNum = Boolean(!isNaN(mayBeNumber));
    return isNum;
}
main();
