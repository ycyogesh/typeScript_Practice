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
b = [...a]               // not changed the old(a) array     correct method

b[2] = 8
console.log(a);
console.log(b);
practice(a);
function practice(passedArrray){
    passedArrray[0] = 20
    // return passedArrray
}

console.log(a);