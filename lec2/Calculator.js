"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        var sum = a + b;
        this.writeToConsole(sum.toString());
        return sum;
    };
    Calculator.prototype.writeToConsole = function (text) {
        console.log(text);
    };
    return Calculator;
}());
exports.Calculator = Calculator;
