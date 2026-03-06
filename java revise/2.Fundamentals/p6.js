//write a program to find a largest number

var a = 12;
var b = 24;

if (a > b){
    document.writeln(`<h3> ${a} is greater than ${b} </h3>`)
} else {
    document.writeln(`<h3> ${b} is greater than ${a} </h3>`)
}

document.writeln(`<hr>`);

//smallest number

var x = 0.5;
var y = 0.25;

if (x < y){
    document.writeln(`<h3> ${x} is smaller than ${y} </h3>`)
} else {
    document.writeln(`<h3> ${y} is smaller than ${x} </h3>`)
}

document.writeln(`<hr>`);

//write a program to find an largest number in 5 numbers -5, -2 .-6, 0, -1

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e){
    document.writeln(`<h3> ${a} is the largest number </h3>`)
}   else if (b > a && b > c && b > d && b > e){
    document.writeln(`<h3> ${b} is the largest number </h3>`)
} else if (c > a && c > b && c > d && c > e){
    document.writeln(`<h3> ${c} is the largest number </h3>`)
} else if (d > a && d > b && d > c && d > e){
    document.writeln(`<h3> ${d} is the largest number </h3>`)
} else {
    document.writeln(`<h3> ${e} is the largest number </h3>`)
}

document.writeln(`<hr>`);

//calculate the grades of an student based on the marks
//students marks input 
/* 
    <35 - Fail
    >=35 -pass
    <60 and >=35 - second class
    <80 and >=60 - first classS
    >=80 - distinction
*/

var a = 85;

if (a < 35){
    document.writeln(`<h3> student has failed with marks${a}</h3>`)
} else if (a >= 35 && a < 60){
    document.writeln(`<h3> student has passed with second class with marks${a}</h3>`)
} else if (a >= 60 && a < 80){
    document.writeln(`<h3> student has passed with first class with marks  ${a}</h3>`)
} else if (a >= 80){
    document.writeln(`<h3> student has passed with distinction with marks ${a} </h3>`)
}