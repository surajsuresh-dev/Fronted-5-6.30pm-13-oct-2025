// conditional statements

// if conditions
var x = 123;

if (x>100) {
    document.writeln(`<h3> input ${x} is greater than 100 </h3>`);
}

document.writeln(`<hr>`);

// if and  else conditions
var a = 24;
if (a > 40){
    document.writeln(`<h3> input ${a} is greater than 40 </h3>`)
} else {
    document.writeln(`<h3> input ${a} is less than 40 </h3>`)       
}

document.writeln(`<hr>`);

//if , else if and else conditions

var day = 1;

if(day == 1){
    document.writeln(`<h3> today is Monday </h3>`)
} else if(day == 2){
    document.writeln(`<h3> today is Tuesday </h3>`)
} else if(day == 3){
    document.writeln(`<h3> today is Wednesday </h3>`)
} else if(day == 4){
    document.writeln(`<h3> today is Thursday </h3>`)
} else if(day == 5){
    document.writeln(`<h3> today is Friday </h3>`)
} else if(day == 6){
    document.writeln(`<h3> today is Saturday </h3>`)
} else if(day == 7){
    document.writeln(`<h3> today is Sunday </h3>`)
} else {
    document.writeln(`<h3> invalid input check your input </h3>`)
}

document.writeln(`<hr>`); 

/* 
    switch(key){
        case value:
            break;
        case value:
            break;
        default:
            break;
    }
    
*/

var day = 5;

switch(day){
    case 1: console.log(`today is Monday`);
    break;
    case 2: console.log(`today is Tuesday`);
    break;
    case 3: console.log(`today is Wednesday`);
    break;
    case 4: console.log(`today is Thursday`);
    break;
    case 5: console.log(`today is Friday`);
    break;
    case 6: console.log(`today is Saturday`);
    break;
    case 7: console.log(`today is Sunday`);
    break;
    default: console.log(`invalid input check your input..`);
}