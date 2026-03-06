/*  
        looping statements

        1.for loop
        for (initialization; condition; increment/decrement){
            //code to be executed
        }

        2. while loop
        initialization;
        while(condition){
            //code to be executed
            increment/decrement;
        }


        3. do-while loop
        initialization;
        do{
            //code to be executed
            increment/decrement;
        } while(condition);

*/

var x = 10;
for (var i = 1; i < x; i++) {
    document.writeln(`<h3> ${x} * ${i} = ${ x * i } </h3>`);
}

document.writeln(`<br>`);
document.writeln(`<hr>`);

//while loop
var a = 22; //variable
var j = 1; //initialization

while (j <= a) { //condition
    document.writeln(`<h3> ${a} * ${j} = ${ a * j } </h3>`);
    j++; //increment
}

document.writeln(`<br>`);
document.writeln(`<hr>`);

//do-while loop

var z = 44;
var p = 1;

do {
    document.writeln(`<h3> ${z} * ${p} = ${ z * p } </h3>`);
    p++;
} while (false);