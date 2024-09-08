"use strict";
var _a;
console.log(5, 4, "hello world");
function add(a, b) {
    return a + b;
}
var x = add(2, 3);
x.toExponential();
var user = {
    age: 31,
    name: "John",
};
(_a = user.isMember) === null || _a === void 0 ? void 0 : _a.valueOf();
var numbers = [5];
numbers.push(1, 2, 3, 4, 5);
var ab = numbers.map(function (value) { return value * 2; }).filter(function (x) { return x > 10; });
