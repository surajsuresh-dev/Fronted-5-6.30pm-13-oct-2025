// object array

var user ={
    name:"suraj",
    email:"ayanakoji@gmail.com",
    age:21,
    hobbies:["swimming","dancing","sports","hacker"],
    address:{
        city:"banglore"
    }
}

console.log(`user=`,user)

// object.key  -  object["key"]

document.writeln(`<h2> name= ${user.name}</h2>`)
document.writeln("<h2> age="+user["age"]+"years</h2>")
document.writeln("<h1>"+ user["address"]["city"]+" </h1>")
document.writeln("<h1> Lives in "+ user.address.city +"</h1>")