/* 
    operators
    
    1. arithmetic
        +, -, *, /, %, **
    2. logical
        &&, ||, !
    3. relational / conditional
        >, <, >=, <=, ==(equal to), === (strictly equal to), !=(not equal to), !== (strictly not equal to)
    4. inc/dec operators
        pre ++i or --i
        post i++ or i--
    5. ternary operator
        condition ? true : false
    6. shift operators
        <<, >>, >>>
    7. misc 
        , . '' "" 
        () function ,
        [] array and property in an object , 
        {} block closure,; 
    
    {8.bitwise operators 
        &, |, ^, ~, <<, >>, >>>} extra 

*/

var x = 123;
var res = x * 45 + 154 + 95 - 14;
console.log(`product = `,res);

//(a+b+c) power of 2
var a = 2;
var b = 3;
var c = 4;  
var res = (a+b+c)**2;
console.log(`res = `, res);