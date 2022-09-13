// Number type variables
var first = 123; // number
var second = 0x37CF; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
// String type variables
var employeeName = "Yogesh";
console.log(employeeName);
// Array Datatype 
var fruits = ["Apple", "Orange", "Banana"]; // normal
var fruits1 = ["Grapes", "Pinapple", "Guava"]; // generic array type
var arr = [1, 3, "Apple", "Orange", "Banana", true, false]; // this also can
console.log(fruits);
console.log(fruits1);
console.log(arr);
var fruits2;
fruits2 = ["Mango", "Jackfruit", "Lemon"]; // string array
console.log(fruits2);
var ids;
ids = [23, 34, 100, 124, 44]; // number array
console.log(ids);
var values = [1, "Cucumber", 2, "Custard Apple"];
var values1 = [3, "Papaya", 4, "Sapota"];
console.log(values);
console.log(values1);
// Tuple Datatype
var employee = [1, "Deva"];
var person = [2, "Stalin", true];
var user = [3, "Shamili", true, 22, "Admin"];
employee.push(7, "Arun"); // Add elements in tuples
console.log(employee);
console.log(person);
console.log(user);
var employee1;
employee1 = [[4, "Karthi"], [5, "Dharani"], [6, "Vijay"]];
console.log(employee1);
// enum Datatype
var fruitName;
(function (fruitName) {
    fruitName[fruitName["Apple"] = 0] = "Apple";
    fruitName[fruitName["Orange"] = 1] = "Orange";
    fruitName[fruitName["Banana"] = 2] = "Banana";
})(fruitName || (fruitName = {}));
function getFruits(fruit) {
    if (fruit === "yc" || fruit === "deva") {
        return fruitName.Orange;
    }
    return 0;
}
var getFruitName = getFruits("deva");
console.log(getFruitName);
// String enum
var printMedia;
(function (printMedia) {
    printMedia["Newspaper"] = "NEWSPAPER";
    printMedia["Newsletter"] = "NEWSLETTER";
    printMedia["Magazine"] = "MAGAZINE";
    printMedia["Book"] = "BOOK";
})(printMedia || (printMedia = {}));
console.log(printMedia.Newspaper);
console.log(printMedia["Book"]);
// Computed enum
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = getPrintMediaCode("NEWSLETTER")] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = PrintMedia.Newsletter * 5] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 5] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getPrintMediaCode(mediaName) {
    if (mediaName === "NEWSLETTER") {
        return 5;
    }
    return 0;
}
console.log(PrintMedia.Newsletter);
console.log(PrintMedia.Magazine);
// Heterogeneous enum
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Deactivate"] = 1] = "Deactivate";
    Status["Pending"] = "YES";
})(Status || (Status = {}));
// Assertion 
var code = 123;
var employeeCode = code; // using angular bracket
console.log(employeeCode);
var code1 = 123;
var employeeCode1 = code1; // using as keyword
console.log(employeeCode1);
// Function 
// Function with parameter and return types
var Sum = function (x, y) {
    return x + y;
};
console.log(Sum(5, 7));
// Function Parameteres
function Greet(greeting, name) {
    return greeting + " " + name + "!";
}
console.log(Greet("Hi", "Kruthika"));
console.log(Greet("Hello", "Uma"));
console.log(Greet("Welcome", "Shamili"));
// Function Optional Paramater
function Greetings(greeting, name) {
    return greeting + " " + name + "!";
}
console.log(Greetings("Hi", "Deva"));
console.log(Greetings("Hello"));
function add(a, b) {
    return a + b;
}
console.log(add("Hii ", "Deva"));
console.log(add(100, 20));
// Rest Parameteres 
function GreetRest(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(",") + "!";
}
console.log(GreetRest("Hello", "Deva", "YC", "Stalin", "Karthi", "Dharani"));
;
function addKeyValue(key, value) {
    console.log("addKeyValue : key = " + key + ", value = " + value);
}
function updateKeyValue(key, value) {
    console.log("updateKeyValue : key = " + key + ", value = " + value);
}
var kvp = addKeyValue;
kvp(1, "Uma");
var kvp1 = updateKeyValue;
kvp1(2, "Dharani");
var numArr = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[2]);
var empObj1 = {
    empCode: 1,
    empName: "Deva"
};
var empObj2 = {
    empCode: 2,
    empName: "Stalin",
    empDept: "Mech"
};
console.log(empObj1);
console.log(empObj2);
var empObj3 = {
    name: "Dharani",
    empId: 1,
    gender: "Male"
};
console.log(empObj3);
var personObj = {
    SSN: 125304445,
    name: "Arun"
};
console.log(personObj);
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empCode) {
        return 2000;
    };
    return Employee;
}());
var emp = new Employee(1, "Shamili");
console.log(emp);
