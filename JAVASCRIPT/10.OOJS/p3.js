
//object.getPrototypeof(object) -> read the properties of an prototype object

//object.setPrototypeof(object) -> set an new property to an prototype objects

let car = {
    title: "innova",
    company : "toyata",
    model : 2024,
    color : "white"
}

let car1 = Object.create(car)

console.log(`car =`,car)
console.log(`car1 =`,car1)

//relative object properties from prototype

let car2 = Object.getPrototypeOf(car1)
console.log(`getprototype =`,car2)


//update new set of property to the cloned objects
let car3 = Object.setPrototypeOf(car1,{
    title : "Thar",
    company : "mahindra",
    model : 2023,
    color : "black"

})

console.log(`car3 =`,car3)
