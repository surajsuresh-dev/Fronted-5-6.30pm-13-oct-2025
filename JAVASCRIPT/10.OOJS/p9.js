
//Object.freese(object) -> disables the re-assignment

let user = {
    name: "jhon",
    email: "jhon@gmail.com",
    age : 22
    
}

console.log(`user =`,user)

//freeze the object

Object.freeze(user)

user.name = "tom"
user.email = "tom@gmai.com"
user.age = 25

console.log(`after =`,user)

//objeccts.key(objest) - return array of  keys
console.log(`keys =`,Object.keys(user))

//object.values(object) -> return array of values
console.log(`values =`,Object.values(user))