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
// console.log(c.a);
// console.log(c.b);
// console.log(c.sum());
// console.log(c.multiply());

// function abc(a : number){

// }
// function abc(b : number){

// }


class A{
    a : number | string;
    constructor(a : number);
    constructor(b : string);
    constructor(a:number | string){
     this.a = a; 
    }

    extend(e:number):number{
        if(typeof(this.a) == "number"){
            return this.a + e;
        }
        return 0;
    }
    concatFun(a : number, b : number){
        let v = this.extend(b)
        this.a = a;             // swap up and check the answer     // this is correct
        return this.a * v;
    }
    concatFunSwap(a : number, b : number){
        this.a = a;             // swap down and check the answer     // this is wrong
        let v = this.extend(b)
        return this.a * v;
    }
}

let newObject : A = new A(4);
console.log(newObject.extend(5));
console.log(newObject.a);
console.log(newObject.concatFun(5,6));
console.log(newObject.a);
// console.log(newObject.concatFunSwap(5,6));

class B extends A{

    b! : string;
    constructor(a : number,b? : string);
    constructor(a : number,b? : string){
        super(a);
        if(b!= null && typeof(b)== "string"){
            this.b = b;
        }
    }
    extend(e : number):number{
        if(typeof(this.a)=="number"){
        return  e * this.a;
        }
        return 0;
    }
    myChild(s : number){
        return s;
    }
}
// let newObjectB : A = new B(6);       Take only common properties
let newObjectB : B = new B(6);


console.log(newObjectB.concatFun(3,6));
console.log(newObjectB.a);
console.log(newObjectB.extend(5));
// console.log(newObject.myChild(5));
console.log(newObjectB.myChild(100));





