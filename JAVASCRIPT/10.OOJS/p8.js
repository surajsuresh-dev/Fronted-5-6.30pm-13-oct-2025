
 //object.entries(object) => convert from object to entries

 let car = {
    title: "jeep",
    company: "wrangler",
    year : 2024

 }

 console.log(`object =`,car)

 //convert the object into entries
 let out = Object.entries(Car)

 console.log(`entries (array of key & values) =`, out)//array of key:values

 //object.fromEntries(entries) => convert from entries into objects

 let out1 = Object.fromEntries(out)
 console.log(`object =`,out1)