
//  object array

var emp = [
    {
        id: 1,
        name: "ayanakoji",
        desg: "frontend devloper",
        salary: 1000000

    },
     {
        id: 2,
        name: "sankini",
        desg: "hacker",
        salary: 11111119

    },
     {
        id: 3,
        name: "oreiki",
        desg: "ceo lead",
        salary: 10990099090090

    },

]

console.log(`emp=`,emp)

emp.forEach(function(val,index){
    document.writeln(`<h1> ${val.name}</h1>`)
    document.writeln(`<br/>`)
    document.writeln(`<h1> ${val.desg}</h1>`)
    document.writeln(`<br/>`)
    document.writeln(`<h1> ${val.salary}</h1>`)
    document.writeln(`<br/>`)
})