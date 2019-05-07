"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Calculator_1 = require("./Calculator");
var EngineerCalculator = /** @class */ (function (_super) {
    __extends(EngineerCalculator, _super);
    function EngineerCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EngineerCalculator.prototype.add = function (a, b) {
        var sum = _super.prototype.add.call(this, a, b);
        return Math.floor(sum);
    };
    return EngineerCalculator;
}(Calculator_1.Calculator));
exports.EngineerCalculator = EngineerCalculator;
