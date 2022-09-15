let a : number = 10
class Calculator{
    a : number | string;
    b! : number;
    constructor(a : number);
    constructor(a : string);
    constructor(a : number, b : number);

    // constructor (a : number, b : number){
    //     this.a = a;
    //     this.b = b;
    // }
    constructor (a : number | string, b? : number){
        if(b != null && typeof(b)=="number"){
            this.b = b;
        } 
        this.a = a;
    }
    // constructor(a : number | string){
    //     this.a = a;
    // }
    sum(){
        // return this.a;  // return a
        if(typeof(this.a)=="number"){
            return this.a + this.b;
        }
        return 0;
    }

    multiply(){
        if(typeof(this.a)=="number"){
            return 5 * this.sum();
        }
        return 0;
    }
}
let c : Calculator = new Calculator(2,4);
console.log(c.a);
console.log(c.b);
console.log(c.sum());
console.log(c.multiply());

// function abc(a : number){

// }
// function abc(b : number){

// }


class A{
    a : number;
    constructor(a:number);
    constructor(a:number){
     this.a = a;   
    }
    extend(e:number){
        return this.a * e;
    }
    concatFun(a : number, b : number){
        this.a = a;             // swap down and check the answer
        b = this.extend(b)
        return this.a + b;
    }
}

let newObject : A = new A(4);
console.log(newObject.extend(5));
console.log(newObject.concatFun(5,6));
console.log(newObject.a);



