// object - group of properties
/* 
    prototype of an object
    type name = {
    key: value, -> property
    }
*/

let user = {
    name: "John",
    age: 22,
    isUser: true,
    hobbies: ["riding","driving","cycling"],
    bank: {
        title: "SBI"
    },
    getUser:function(){
        return `My name is ${this.name}}`
    },
    getAge:()=>{
        // this pointer cant access other properties values 
        // (this pointer global inside arow function)
        document.writeln(`<h1> age is ${this.age}</h1>`) //undefined
    }
}

console.log(`user=`,user)


document.writeln(`<h1> name = ${user.name} </h1>`); //object key
document.writeln(`<h1> age = ${user["age"]} </h1>`); //object ["key"]
document.writeln(`<h1> name ${user.getUser()} </h1>`) //object["key"]

user.getAge()
