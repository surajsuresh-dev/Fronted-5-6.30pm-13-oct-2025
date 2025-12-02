/* variables */

// int,float,doble = numbers
/* string,char = string
boolean
array []
objects {}


null 
undefined*/

// datatype name = value;

/* datatype name = value; declaration of variables */
var x = 123;  /* global scope */
var y = 133;  /* block scopec(re assign the value) */
const z=36; /* block scope (cant re assign)*/

console.log(`var x =`, x)
console.log(`var y =`, y)
console.log(`var z =`, z)

document.writeln("<h1> var x =" + x +"</h1>");
document.writeln('<h1> var x =' + x +'</h1>');

// backtick

document.writeln(`<h1> z = ${z} </h1>`);

// re-assign
x = 260;
console.log(`new x=`,x)
document.writeln("<h1> var x =" + x + "</h1>");


y = 4145.909;
console.log(`new y=`,y)
document.writeln('<h1> var y =' + y + '</h1>');

// handling runtime exception (error)

try{
    z = 45.34;
    console.logg(`const z=`,z)
} catch(err) {
    console.log(err)
}