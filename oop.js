var a = 10;
var Calculator = /** @class */ (function () {
    // constructor (a : number, b : number){
    //     this.a = a;
    //     this.b = b;
    // }
    function Calculator(a, b) {
        if (b != null && typeof (b) == "number") {
            this.b = b;
        }
        this.a = a;
    }
    // constructor(a : number | string){
    //     this.a = a;
    // }
    Calculator.prototype.sum = function () {
        // return this.a;  // return a
        if (typeof (this.a) == "number") {
            return this.a + this.b;
        }
        return 0;
    };
    Calculator.prototype.multiply = function () {
        if (typeof (this.a) == "number") {
            return 5 * this.sum();
        }
        return 0;
    };
    return Calculator;
}());
var c = new Calculator(2, 4);
console.log(c.a);
console.log(c.b);
console.log(c.sum());
console.log(c.multiply());
// function abc(a : number){
// }
// function abc(b : number){
// }
