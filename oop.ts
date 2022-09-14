class Calculator{
    a : number;
    b : number;

    constructor (a : number, b : number){
        this.a = a;
        this.b = b;
    }
    sum(){
        return this.a + this.b;
    }

    multiply(){
        return 5 * this.sum();
    }
}
let c : Calculator = new Calculator(2,4);
console.log(c.a);
console.log(c.b);
console.log(c.sum());
console.log(c.multiply());



