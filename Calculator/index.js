"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)("Enter first number: \n");
    console.log(firstString);
}
