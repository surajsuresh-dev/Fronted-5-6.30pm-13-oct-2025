
//array.sort()

let ageGroup = [18,21,1,1,51,18,21,5,18,7,10];
console.log(`before =`,ageGroup);

let out = ageGroup.sort(function(a,b){
    return a - b ;//ascending order
});


console.log(`acending =`,out);


console.log(`\n`);

let out1 = ageGroup.sort(function(a,b){
    return b - a ;//descending order
});

console.log(`decending =`,out1);