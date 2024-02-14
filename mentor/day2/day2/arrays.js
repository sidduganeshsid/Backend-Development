/** arr = [1,2,3]

console.log(typeof arr)

arr1 = new Array()

console.log(typeof arr1)

console.log(arr1)**/

/** 
arr = [1,2,3,4,9,8,7,19,21,29,20]

console.log(arr[0])

console.log(arr[7])

console.log(arr[21])

console.log(arr[-1]) **/

/**
 * Arrays are mutable. We can modify the arrays
 */
//arr[1] =200
//console.log(arr)

/**
 * Insert items in the arrays
 *

arr = [5,7,1,9,8,16]
console.log(arr)

arr.push(11)
console.log(arr)

arr.push(99,100,101)
console.log(arr)

//ushift method
arr.unshift(999)
console.log(arr)

arr.unshift(9,99,999)
console.log(arr)  */


/**
 * Removing elements
 * 
 */

//pop method
let arr = [5,7,1,9,8,16]

console.log(arr.pop())
console.log(arr)

//shift
console.log(arr.shift())
console.log(arr)

//concat

let a1 = [1,2,3]
let a2 = [5,6]

let r = a1.concat(a2)
console.log(r)

//size of the arr
console.log(a1.length)

/**
 * Convert array into strings
 */
chr_arr = ['V', 'i','s', 'h','w','a',' ', 'M','o','h','a','n']

//join
console.log(chr_arr.join())
console.log(chr_arr.join(""))
console.log(chr_arr.join('$'))

console.log(typeof chr_arr.toString())


/**
 * Slicing of the array
 */

/** let nums = [3,4,5,5,6,7,9,11,13,12,10]

console.log(nums.slice(2))
console.log(nums.slice(2,7))
console.log(nums.slice(5,-1))
console.log(nums.slice(-9,-2))
console.log(nums.slice(2,-1))

console.log(nums) **/


/**
 * Splicing , which modifies the given array
 *
let numbers = [1,2,3,4,5]
let removed = numbers.splice(2,2,11,12,13)
console.log(removed)
console.log(numbers) **/


/**
 * Reverse a given array
 *

let nums  = [4,1,5,7,19,2]
nums.reverse()
console.log(nums) 

let nums  = [4,1,5,7,19,2]
console.log(nums.indexOf(21)) */


/**
 * sorting the array
 */
let my_arr = [15,40,1,13,2]


//my_arr.sort((a,b)=> a-b)

my_arr.sort((a,b)=> b-a)

console.log(my_arr)
