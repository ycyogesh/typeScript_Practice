class Calculator{
    a : number;
    b : number;

    constructor (a : number, b : number){
        this.a = a;
        this.b = b;
    }
}
let c : Calculator = new Calculator(2,4);
console.log(c.a);
console.log(c.b);

