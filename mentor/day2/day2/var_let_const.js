/**
 * var  :
 *   1. It's used to define a variable
 *   2. It has function scope but no block scope
 *   3. It is hoisted
 */
/** 
function f1(){
    var i=5
    console.log(i)
}

f1()
console.log(i) 

{
   var i =5
}
console.log(i) 


console.log(i)

var i =23 

console.log(i) **/


/**
 * let 
 * 
 * 1. No hoisting
 * 2. It also has block scope
 

console.log(i)

let i =5


{
    let name = "Vishwa"
}

console.log(name) **/


/**
 * const 
 *   - scope is exactly same as let
 *   - const variables are final, can't be re-assigned a value
 */

const country = "India"

country = "USA"