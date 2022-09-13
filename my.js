var a = 1;
console.log(a);
var name1 = "Deva";
console.log(name1);
var arr1 = [1, 2, 3];
console.log(arr1);
function myFunction(a, b) {
    return a * b;
}
console.log(myFunction(30, 17));
var myEnum;
(function (myEnum) {
    myEnum[myEnum["yc"] = 3] = "yc";
    myEnum[myEnum["deva"] = 4] = "deva";
    myEnum[myEnum["stalin"] = 5] = "stalin";
})(myEnum || (myEnum = {}));
if (a == 1) {
    console.log("True");
}
else {
    console.log("False");
}
for (var i = 5; i < 10; i++) {
    console.log(i);
}
function forLoop(c) {
    var b = [];
    for (var i = 2; i < c; i++) {
        b.push(i);
    }
    return b;
}
var c = forLoop(12);
console.log(c);
