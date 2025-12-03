// nested condition statement

var num = 300;

if(num % 2 === 0){
    if(num > 200){
        document.writeln(`<h2> ${num} is greater
            than 200</h2>`)
    }
    if(num < 200){
        document.writeln(`<h2> ${num} is lesser
            than 200</h2>`)
    }
    if(num === 200){
        document.writeln(`<h2> ${num} is greater
            than 200</h2>`)
    }
    else {
        document.writeln(`<h2> ${num} is even</h2>`)
    }
    
}else {
        document.writeln(`<h2> ${num} is odd</h2>`)
    }