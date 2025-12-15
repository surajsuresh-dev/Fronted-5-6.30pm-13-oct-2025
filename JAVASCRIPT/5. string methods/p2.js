/*  split(ref) */

var str = "Welcome to Javascript";
var str1 = "Javascript-is-a-Scripting-language";

console.log(`str=`,str);
console.log(`str split =`, str.split());  //["Welcome to Javascript"]
console.log(`str split =`, str.split(""));  //["J","a","v","a","s","c","r","i","p","t","-","i","s","-","a","-","S","c","r","i","p","t","i","n","g","-","l","a","n","g","u","a","g","e"]
console.log(`str1 split( )=`, str.split(" "));  //["Javascript-is-a-Scripting-language"]

console.log(`\n`);

console.log(`str=`,str1);
console.log(`str2 split =`, str1.split());
console.log(`str2 split =`, str1.split(""));
console.log(`str2 split =`, str1.split("-"));


console.log(`\n`);

let str2 = str.split(" ");
let str3 = str1.split("-");

console.log(`join =`,str2)
console.log(`join =`,str2.join(" "));
console.log(`join =`,str3.join(" "));

console.log(`\n`);


//String reverse

var str4 = "HELLOWORLD";

console.log(`str =`, str4);
console.log(`str =`, str4.split(""));  //["H","E","L","L","O","W","O","R","L","D"]
console.log(`str =`, str4.split("").reverse());  //["D","L","R","O","W","O","L","L","E","H"]
console.log(`str =`, str4.split("").reverse().join(""));  //DLROWOLLEH  "" -> to remove commas we added this in join method
