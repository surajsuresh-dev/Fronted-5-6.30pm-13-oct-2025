
"user strict"; //define strict mode 
//Object.defineProperties(Object,properties)-> all properties write
//protected /read only properties and throw exeption

let user = {}

Object.defineProperties(user,{
    name : {
        value: "Mike"
    },
    email : {
        value: "mike@gmail.com"
    },
    city : {
        value : "manglore"
    },
    getName: {
        value: function() {
            return `<h1> name is ${this.name} </h1>`
        }
    },
    getEmail : {
        value : () => {
            //inside the arrow function this pointer return undefined
            document.writeln(`<h1> email id is = ${this.email} </h1>`)
        }
    }
})

console.log(`user =`,user)

//asssign the new values
user.name = "sam",
user.age = 25
user.city = "banglore"

console.log(`after user =`,user)


