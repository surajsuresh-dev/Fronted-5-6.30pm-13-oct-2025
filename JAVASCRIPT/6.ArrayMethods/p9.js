
//array.entries()

var names = ["mark","harry","jhon"]

console.log(`names =`,names);
let out = names.entries();
console.log(`entries =`,out);//arraay iterator

for(let item of out){
    console.log(item);
}