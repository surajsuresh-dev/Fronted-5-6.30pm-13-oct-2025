// array

/* 
 group of values not mandatory to be similar data types
 
 types:
 1. single dimensnoins
    a. literal array(direct)
    b.using array constructor (assignments)
    c. Array constructor(parameter)
    
    
2. Object Array
   object =. group of key value pairs ={key:values}
   group of objects
   
3. json Array
   */

// single (literal type)
var users=["jhon","mike","gilli","sankini"];

console.log(`users=`,users)
console.log(`users[2]=`,users[2])

/* 
   Array iterations:
      array.forEach(function(value,index){
      //   code
      // })
 */

      users.forEach(function(val,index){
         document.writeln(`<p> ${index} ${val} </p>`)
      })

      document.writeln(`<br/>`)

      for(let i=0; i<users.length; i++){
         document.writeln(`<h2> ${i} ${users[i]}</h2>`)
      }