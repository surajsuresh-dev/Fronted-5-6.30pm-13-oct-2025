// Objct constructor properties

//object.create(object) -> clone or copy the prototype of an input object

let user = {
    name: "tom",
    age: 22,
    city: "banglore"
}
console.log(`user =`,user)

let u1 = Object.create(user)
console.log(`u1 =`,u1)