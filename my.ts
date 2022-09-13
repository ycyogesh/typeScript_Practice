let a:number = 1;
console.log(a);

let name1 : string = "Deva"
console.log(name1);

let arr1:number[] = [1,2,3]
console.log(arr1);

function myFunction(a:number, b:number):number{
    return a*b;
}
console.log(myFunction(30,17));

enum myEnum {
    yc = 3,
    deva,
    stalin
}
if(a == 1){
    console.log("True");
}
else{
    console.log("False");
    
}

for(let i:number=5;i<10;i++){
   console.log(i);
}

function forLoop(c:number):number[]{
    var b:number[]=[];
    for(let i=2;i<c;i++){
        b.push(i)
    }
    return b;
}
let c:number[]=forLoop(12);
console.log(c);

c.forEach(data=>{
    console.log(data);
})