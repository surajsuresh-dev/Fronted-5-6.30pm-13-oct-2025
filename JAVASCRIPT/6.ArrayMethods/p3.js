/* 
splice  (index,declaration,values) 
*/

var colors = ['green', 'red', 'blue', 'yellow'];
console.log(`colors =`, colors);

//add the value into the array without removing any value
colors.splice(1, 0, "purple","orange","pink");
console.log(`colors =`, colors);

//adding the values by removing the existing values
colors.splice(1, 4, "black", "magenta", "white");
console.log(`colors =`, colors);

//only removing the values without adding any values
colors.splice(2, 3);
console.log(`colors =`, colors);