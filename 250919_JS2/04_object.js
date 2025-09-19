{
    var x = "java";
    let y = "python";
    let z = "sql";
    console.log(x,y,z);
}
console.log(x);

for(let i = 0; i < 55; i+=11){
    console.log(i);
}
console.log(i)

let v1 = 10;
let v2 = 11;
let v3 = 12;
function f1(p1, v1) {
  //   let p1 = 30;
  //   let v1 = 30;
  let v2 = 31;
  let v3 = 32;
  {
    let v1 = 40;
    let v2 = 41;
    let v3 = 42;
    let p1 = 43;
    console.log(v1, v2, v3, p1);
  }
  console.log(v1, v2, v3, p1);
}
f1(21, 22);