/**
 * Define a function
 */

function helloStudents(){
    console.log("Hello Students !")
}

helloStudents()


/**
 * I want to get the sum of two numbers
 */
function sum(a,b = 7){
    return a+b ;
}

console.log(sum(5))



function func(){
    console.log(arguments)

}

func(1,2,3,4,5,5,6)