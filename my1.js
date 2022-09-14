let a = 1;
if(a == "1"){
    console.log("True");
}
else{
    console.log("False");
    
}

a = [1,2,3,7]
// b = a                    // changed old(a) array
// b = Object.assign(a)     // changed old(a) array
// b = [...a]               // not changed the old(a) array     correct method
b = JSON.parse(JSON.stringify(a))   // not changed the old(a) array     good method

b[2] = 8
console.log(a);
console.log(b);
practice(a);
function practice(passedArrray){
    passedArrray[0] = 20
    // return passedArrray
}

console.log(a);


arrayNew = [[1,2,3],[4,5,6],[7,8,9]]

// newArray = [...arrayNew]         // changed the old array
newArray = JSON.parse(JSON.stringify(arrayNew))     // not changed the old array    // safest
newArray[1][2] = 200
console.log(arrayNew);
console.log(newArray);

// if 1D array spread is enough [...name]
// if 2D array JSON stringify is best


student = [{"name" : "dharani","id" : 1},
{"name" : "karthi","id" : 2},
{"name" : "surya","id" : 3}]
// studentCopy = [...student]       // changed both
studentCopy = JSON.parse(JSON.stringify(student))       // not changed the old
studentCopy[1].name = "yc"

console.log(student);
console.log(studentCopy);