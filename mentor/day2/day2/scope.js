/**
 * Global scope 
 * eg: air is global
 */
/** 
var name = "Vishwa"

console.log(name)


function func(){
    console.log(name)
}

func() **/


/**
 * Local scope/ Function scope variable
 */
/** 
function func(){
    var num = 55
    console.log(num)
}

func()
console.log(num)//error : not defined.

**/


/**
 * Block Scope
 */

{
    var y = 30
    let x = 20
    const z = 50
    console.log(x)
}

console.log(x)//error : not defined
console.log(y)//prints y valube
console.log(z)//error : not defined