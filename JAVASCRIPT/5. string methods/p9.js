
//replace() and replaceall()

var str="ball bat";

console.log(`input =`,str);
console.log(`replace =`,str.replace('b','c')); // it replaces only first occurrence
console.log(`replaceall =`,str.replaceAll('b','c')); // it replaces all occurrences

var str1 ="javascipt is web scripting language, and also can be used as a server script too.";
var exp = /script/;
var out = str1search(exp); // it returns the index of first occurrence of matched value or returns -1

console.log(`search =`,out);//returns first matched value index