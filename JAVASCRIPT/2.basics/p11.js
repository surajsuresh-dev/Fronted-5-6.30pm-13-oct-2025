
// single - array constructor (assignments)

var colors = new Array();

colors[0] = "red";
colors[1] = "pink";
colors[2] = "blue";
colors[3] = "green";
colors[4] = "black";

console.log(`colors=`,colors)
console.log(`colors[2]`,colors[2])

colors.forEach(function(val,index){
    document.writeln(`<p> ${index} ${val} ${index} </p>`)
})

document.writeln(`<br/>`)


// single - array as constructor (parameters)

var courses = new Array( "html","css","javascript","react");

console.log(`courses =`,courses)
courses.forEach(function(val,index){
    document.writeln(`<p> ${index} ${val} ${index} </p>`)
})



