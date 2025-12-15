/* 

        cahrAt(position) - character
        charCodeAt(position) -decimal values of ascii
        indexOf(char) - first index position of character
        lastIndexOf(char) - last index position of character
        
        */

var str = "Welcome to JavaScript Class.";
console.log(`string=` ,str); 

console.log(`charAt()=`, str.charAt(0));  //w
console.log(`charCodeAt()=`, str.charCodeAt(0));  //119
console.log(`indexOf()=`, str.indexOf('e'));  //1
console.log(`lastIndexOf()=`, str.lastIndexOf('e'));  //6


console.log(`indexOf()=`, str.indexOf('a'));  //12
console.log(`lastIndexOf()=`, str.lastIndexOf('a'));  //24

console.log(`\n`)


var str1 = "Jhon is an engineer. JHON is working in a IT company.jhon stays in bangalore.";

//str.reolace (target, value);
console.log(`str1=` ,str1);
console.log(`replace=`, str1.replace('jhon', 'Sam'));  //only first occurrence
console.log(`replaceAll=`, str1.replaceAll('jhon', 'Sam'));  //all occurrence

console.log(`replace=`, str1.replace(/jhon/, 'Sam'));
console.log(`replace=`, str1.replace(/jhon/gi, 'Sam'));

/* /Regular expressions/


gi = global case insensitive

*/

console.log(`\n`);
//slice(satrt , end), substring(start , end) and substr(start , length)
console.log(`slice=`, str1.slice(0, 19));  //Jhon is an engineer
console.log(`substring=`, str1.substring(0, 19));  //Jhon is an engineer
console.log(`substr=`, str1.substr(0, 19));  //Jhon is an engineer

var str2 = "HelloWorld!" ;
console.log(`substr=`, str2.substr(1, 3));  //ell
console.log(`slice=`, str2.slice(1, 3));  //el
console.log(`substring=`, str2.substring(1, 3));  //el

console.log(`slice=`, str2.slice(-6));  //World!
console.log(`substring=`, str2.substring(-2));  //negative values are treated as 0
console.log(`substr=`, str2.substr(-6));  //counts from last

console.log(`\n`);
//concat() and trim()
var str3 = "Jhon";
var str4 = " Dakaith";   

console.log(`concat=`, str3.concat(str4));  //Jhon Dakaith

var str5 = str4.trim();  //removes spaces from starting and ending
console.log(`concat=`, str3.concat(str5));  //JhonDakaith

console.log(`\n`);



