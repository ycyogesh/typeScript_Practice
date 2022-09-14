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
for (var i_1 = 5; i_1 < 10; i_1++) {
    console.log(i_1);
}
function forLoop(c) {
    var b = [];
    for (var i_2 = 2; i_2 < c; i_2++) {
        b.push(i_2);
    }
    console.log(a);
    return b;
}
var c = forLoop(12);
console.log(c);
c.forEach(function (data) {
    console.log(data);
});
var d = 1;
var e = "Deva";
var f = true;
var g = [1, 2, 3]; // not a good one
var h = { "name": "yc", "id": 3 };
var i = [1, 2, 3]; // good one for optimise
i.push(3, 4, 5);
g.push();
console.log(i);
console.log(g);
console.log(typeof (d), typeof (e), typeof (f), typeof (g), typeof (h), typeof (i));
// if(0 == []){
//     console.log("True");
// }
// else{
//     console.log("False");
// }
