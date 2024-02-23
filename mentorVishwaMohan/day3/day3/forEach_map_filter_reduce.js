
/**
 * forEach method
 */

players = ["Sachin", "Virat", "Dhoni", "Rohit"]

players.forEach((player)=>console.log(player))


/**
 * map -> Creation of new transformed arrat
 */

arr = [1,2,3,4,5,6]

cube_arr = arr.map(num => num**3)

console.log(cube_arr)
console.log(arr)


/**
 * filter
 */

let arr1 = [1,2,3,4,5,6,7,8,9,10]

let even_arr = arr1.filter((num)=> num%2==0)
console.log(even_arr)


/**
 * reduce
 */

const sum = [1,2,3,4,5,6,7,8,9,10].reduce((curr,next)=> curr+next)

console.log(sum)