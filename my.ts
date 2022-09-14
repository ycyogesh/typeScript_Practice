import { type } from "os";

let a: number = 1;
console.log(a);

let name1: string = "Deva";
console.log(name1);

let arr1: number[] = [1, 2, 3];
console.log(arr1);

function myFunction(a: number, b: number): number {
  return a * b;
}
console.log(myFunction(30, 17));

enum myEnum {
  yc = 3,
  deva,
  stalin,
}

if (a == 1) {
  console.log("True");
} else {
  console.log("False");
}

for (let i: number = 5; i < 10; i++) {
  console.log(i);
}

function forLoop(c: number): number[] {
  var b: Array<number> = [];
  for (let i = 2; i < c; i++) {
    b.push(i);
  }
  console.log(a);
  return b;
}
let c: Array<number> = forLoop(12);
console.log(c);

c.forEach((data) => {
  console.log(data);
});

let d = 1;
let e = "Deva";
let f = true;
let g = [1, 2, 3]; // not a good one
let h = { name: "yc", id: 3 };
let i: Array<number> = [1, 2, 3]; // good one for optimise
i.push(3, 4, 5);
g.push();
console.log(i);
console.log(g);

console.log(typeof d, typeof e, typeof f, typeof g, typeof h, typeof i);

// if(0 == []){
//     console.log("True");
// }
// else{
//     console.log("False");
// }

function abc(one: number, two?: string | number): any {
  if (two != null && typeof(two)=="string") {
    // return two.toLocaleLowerCase(); // two?
    console.log("Not Null & String",one,two);
    return;
  }
  console.log(one,two);
  
}
abc(1,"2");
abc(3);
abc(1,4);


function sum(...a : number[][]):number[]{
    return a.reduce((a,b)=>a.concat(b));
}
let l = [[1,2,3],[1,2,4]];
// let b : Array<number> = [2,3,4,5,6,7]
let total : number[]= sum(...l);
console.log(total);


// console.log(...l);
