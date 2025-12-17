
//Array.of(parameters)

var names = Array.of('john','jane','doe','smith','dakaith');
console.log(`names =`,names);

var nums = Array.of(10,20,30,40,50,60);
console.log(`nums =`,nums);

//Array.isArray(variable)

var nums = [10,20,30,40,50];
console.log(`array =`,Array.isArray(nums));

var num = "john doe";
console.log(`string =`,Array.isArray(num));

//Array.flat()

var nums1 = [0,1,2,[3,4,5,[6,7,8,[9,10]]]];

console.log(`nums1 =`,nums1);
console.log(`nums1 =`,nums1.flat(1));
console.log(`nums1 =`,nums1.flat(2));
console.log(`nums1 =`,nums1.flat(3));

console.log(`\n`);

console.log(`all at once =`,nums1.flat(infinity));

