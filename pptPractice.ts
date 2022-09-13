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
let arr = [1,3,"Apple","Orange","Banana",true,false]  ;      // this also can

console.log(fruits);
console.log(fruits1);
console.log(arr);

let fruits2 : Array<string>;
fruits2 = ["Mango","Jackfruit","Lemon"];    // string array
console.log(fruits2);

let ids : Array<number>;
ids = [23,34,100,124,44];                   // number array
console.log(ids);

let values : (string | number)[] = [1,"Cucumber",2,"Custard Apple"];
let values1 : Array<string | number> = [3,"Papaya",4,"Sapota"];
console.log(values);
console.log(values1);


// Tuple Datatype

var employee : [number, string] = [1,"Deva"];
var person : [number, string, boolean] = [2,"Stalin",true];
var user : [number, string, boolean, number, string] = [3,"Shamili",true,22,"Admin"];
employee.push(7,"Arun");        // Add elements in tuples

console.log(employee);
console.log(person);
console.log(user);

var employee1 : [number, string][];
employee1 = [[4,"Karthi"],[5,"Dharani"],[6,"Vijay"]];
console.log(employee1);


// enum Datatype

enum fruitName {
    Apple,
    Orange,
    Banana
}

function getFruits(fruit : string) : fruitName{
    if(fruit === "yc" || fruit === "deva"){
        return fruitName.Orange;
    }
    return 0;
}

let getFruitName : fruitName = getFruits("deva");
console.log(getFruitName);


// String enum

enum printMedia{
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
console.log(printMedia.Newspaper);
console.log(printMedia["Book"]);


// Computed enum

enum PrintMedia {
    Newspaper = 1,
    Newsletter = getPrintMediaCode("NEWSLETTER"),
    Magazine = Newsletter * 5,
    Book = 5
}

function getPrintMediaCode(mediaName : string) : number{
    if(mediaName ==="NEWSLETTER"){
        return 5;
    }
    return 0;
}
console.log(PrintMedia.Newsletter);
console.log(PrintMedia.Magazine);


// Heterogeneous enum

enum Status {
    Active = "ACTIVE",
    Deactivate = 1,
    Pending = "YES"
}



// Assertion 

let code : any = 123;
let employeeCode = <number> code;   // using angular bracket
console.log(employeeCode);

let code1 : any = 123;
let employeeCode1 = code1 as number;    // using as keyword
console.log(employeeCode1);


// Function 
// Function with parameter and return types

let Sum = function(x:number, y:number) : number{
    return x+y;
}
console.log(Sum(5,7));

// Function Parameteres

function Greet(greeting : string, name : string) : string{
    return greeting + " " + name + "!";
}
console.log(Greet("Hi","Kruthika"));
console.log(Greet("Hello","Uma"));
console.log(Greet("Welcome","Shamili"));

// Function Optional Paramater

function Greetings(greeting : string, name? : string) : string{
    return greeting + " " + name + "!";
}

console.log(Greetings("Hi","Deva"));
console.log(Greetings("Hello"));
// console.log(Greetings("Welcome","Shamili"));

// Function Overloading

function add(a:number, b:number) : number;
function add(a:string, b:string) : string;

function add(a:any, b:any) : any{
    return a+b;
}

console.log(add("Hii ","Deva"));
console.log(add(100,20));

// Rest Parameteres 

function GreetRest(greeting : string, ...names : string[]){
    return greeting + " " + names.join(",")+"!";
}

console.log(GreetRest("Hello","Deva","YC","Stalin","Karthi","Dharani"));


// Interface

interface KeyValueProcessor{
    (key:number, value:string):void;
};

function addKeyValue(key:number, value:string):void{
    console.log("addKeyValue : key = "+ key + ", value = "+ value);
}

function updateKeyValue(key:number, value:string):void{
    console.log("updateKeyValue : key = "+ key + ", value = "+ value);
}

let kvp:KeyValueProcessor = addKeyValue;
kvp(1,"Uma");

let kvp1:KeyValueProcessor = updateKeyValue;
kvp1(2,"Dharani");


