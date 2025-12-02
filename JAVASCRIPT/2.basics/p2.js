var a = 123;
let b = 234.5;
const c = 256.69;

document.writeln(`<h1> a= ${a} </h1>`)
document.writeln(`<h1> b= ${b} </h1>`)
document.writeln(`<h1> c= ${c} </h1>`)

// re-declaration

var a = 245.67;
document.writeln(`<h1> a = ${a}</h1>`)

/* cant redeclare block scope variables */
// let b = 4567.90
// const c = 123.45