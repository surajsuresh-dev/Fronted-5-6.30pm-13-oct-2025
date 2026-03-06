//datatypes

var x= 123; //global scope - re-declare, re-assign
let y = 114; //block scope - re-assign, not re-declare
const z = 1223; //block scope - not re-assign, not re-declare (fixed)

console.log(`var x = `, x);
console.log(`let y = `, y);
console.log(`const z = `, z);

console.log(`\n`); //to print in new line

//to check the datatype of variable
console.log(`typeof x = `, typeof x);
console.log(`typeof y = `, typeof y);
console.log(`typeof z = `, typeof z);

//re-assgn
y = 555;
console.log(`re assign y = `, y);

x = 456;
console.log(`re assign x = `, x);

//const re-assignment not possible for runtime error we have to use try catch
try {
    //re-asssignment
    z = 1234;
    console.log(`const reassign z =`,z)
} catch (error) {
    console.log(error);
}


var str = "Welcome to JavaScript";
console.log(`str = `, str);

//null and undefined
var p = null
var q = undefined   

console.log(`string str = `, str);
console.log(`char ch =`,ch);
console.log(`null p = `, p);
console.log(`undefined q = `, q);
console.log(`isview =`,isView)
console.log(`isUser =`,isUser)

// naming  an variable => $p , lowercase, upercase , p1

console.log(`\n`); //to print in new line
//to check an datatypes of an variable

console.log(`x = `, typeof x);
console.log(`y = `, typeof y);
console.log(`z = `, typeof z);
console.log(`str = `, typeof str);
console.log(`ch =`,typeof ch);
console.log(`null = `, typeof p);
console.log(`undefined = `, typeof q);
console.log(`isView = `, typeof isView);
console.log(`isUser = `, typeof isUser);