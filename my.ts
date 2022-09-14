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
    var b:Array<number>=[];
    for(let i=2;i<c;i++){
        b.push(i)
    }
    console.log(a);  
    return b;
}
let c:Array<number>=forLoop(12);
console.log(c);

c.forEach(data=>{
    console.log(data);
})


let d = 1;
let e = "Deva";
let f = true;
let g = [1,2,3];        // not a good one
let h = {"name" : "yc","id" : 3};
let i:Array<number> = [1,2,3];      // good one for optimise
i.push(3,4,5);
g.push();
console.log(i);
console.log(g);

console.log(typeof(d),typeof(e),typeof(f),typeof(g),typeof(h),typeof(i));

// if(0 == []){
//     console.log("True");
// }
// else{
//     console.log("False");
// }


