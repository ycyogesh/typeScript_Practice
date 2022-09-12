// Number type variables

let first : number = 123;       // number
let second : number = 0x37CF;    // hexadecimal
let third : number = 0o377;     // octal
let fourth : number = 0b111001; // binary

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);


// String type variables

let employeeName : string = "Yogesh"
console.log(employeeName);


// Array Datatype 

let fruits : string[] = ["Apple","Orange","Banana"];        // normal
let fruits1 : Array<string> = ["Grapes","Pinapple","Guava"];  // generic array type
let arr = [1,3,"Apple","Orange","Banana",true,false]        // this also can

console.log(fruits);
console.log(fruits1);
console.log(arr);

let fruits2 : Array<string>;
fruits2 = ["Mango","Jackfruit","Lemon"];    // string array
console.log(fruits2);

let ids : Array<number>;
ids = [23,34,100,124,44];                   // number array
console.log(ids);

let values : (string | number)[] = [1,"Cucumber",2,"Custard Apple"]
let values1 : Array<string | number> = [3,"Papaya",4,"Sapota"]
console.log(values);
console.log(values1);





