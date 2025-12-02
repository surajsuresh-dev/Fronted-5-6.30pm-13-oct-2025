/* coditional statement */

var x = 123;

// if condition
if( x > 100){
    document.writeln(`<h1> condition is true
        </h1>`)
}

var a = 45.56;

// if and else
    if( a > 50){
        document.writeln(`<h1> a is greater than 50 </h1>`)

    } else {
        document.writeln(`<h1> a is less than 50 </h1>`)
    }

    var day =7

    if(day == 1){
        document.writeln(`<h2>Monday</h2>`)
    } else if(day == 2){
        document.writeln(`<h2>tuesday</h2>`)
    }else if(day == 3){
        document.writeln(`<h2>wednesday</h2>`)
    }else if(day == 4){
        document.writeln(`<h2>thursday</h2>`)
    }else if(day == 5){
        document.writeln(`<h2>Friday</h2>`)
    }else if(day == 6){
        document.writeln(`<h2>saturday</h2>`)
    }else if(day == 7){
        document.writeln(`<h2>Sunday</h2>`)
    }else {
        document.writeln(`<h2>invalid day</h2>`)
    }


    // switch case

    var color = 'r';

    switch (color){
        case "r":
            document.writeln(`<h2> red</h2>`)
            break;
        case "g":
            document.writeln(`<h2> green</h2>`)
            break;    
        case "p":
            document.writeln(`<h2> pink</h2>`)
            break;
        case "b":
            document.writeln(`<h2> blaack</h2>`)
            break; 
        case "c":
            document.writeln(`<h2> cyan</h2>`)
            break;  
        case "y":
            document.writeln(`<h2> yellow</h2>`)
            break;      
            
        default:
            document.writeln(`<h2>invalid color code</h2>`)
            break;

    }