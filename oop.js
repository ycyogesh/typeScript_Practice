var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculator.prototype.sum = function () {
        return this.a + this.b;
    };
    return Calculator;
}());
var c = new Calculator(2, 4);
console.log(c.a);
console.log(c.b);
console.log(c.sum());
