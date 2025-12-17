
//array.map(function(val,index){})

//return formatted array 

var names = ["jhon", "dakaith","harry","mark"];

console.log(`names =`,names);

let out1 = names.map(function(val,index){
    return "mr/miss" + val.toUpperCase();
});

console.log(`out1 =`,out1);

console.log(`\n`);

//array.fill()
var list = [1,2,3,4,5,6,7,8];
console.log(`before =`,list);

console.log(`fill =`,list.fill(0));//fill(value,start,end)