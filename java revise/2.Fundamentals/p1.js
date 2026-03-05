
//variable
//datatypes name = values

//var(global), let and const(block or local scope)

var x = 123;
var _x = 354;
var $x = 456;

//to print an variabble value

//dom
document.writeln("<h3> x = " + _x + "</h3>");
document.writeln(`<h3> x = ${x} </h3>`);
document.writeln(`<br/>`);

document.writeln(`<h3> x = ${$x} </h3>`);

//console
console.log("x = " , x);//respective datatype value
console.log("x = " ,typeof x); //to check the datatype of variable

console.log("\n"); //to print in new line
console.log("x = " + x);//print in string formate


//int, float, double -> number
var x = 20;
var a = 2.4;
var b= 67676.676767;

console.log("x = " , x);
document.writeln(`<h3> x = ${a} </h3>`);
document.writeln(`<h3> x = ${b} </h3>`);

console.log("x = " , x);
console.log("x = " ,typeof x); //to check the datatype of variable


//string
var c = 'Welcome to JavaScript';
var x = "Welcome to JavaScript";
var y = `Welcome to JavaScript`;

console.log("x = " , x);
console.log("x = " ,typeof x); //to check the datatype of variable
