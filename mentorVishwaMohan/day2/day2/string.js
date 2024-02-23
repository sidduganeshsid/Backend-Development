/**
 * String
 */

let name = 'Vishwa'

let city = "Bangalore"

console.log(name , city)
console.log(typeof name)

/**
 * Accessing character based on index
 */
console.log(name[0]) 

console.log(name[3])
console.log(name[11])

name[2] ="M"
console.log(name)

//length of the string
console.log(name.length)

let first_name = "Vishwa"
let last_name = " Mohan"

let full_name = first_name.concat(last_name)
console.log(full_name)

console.log( first_name + last_name)

/**
 * covnert that into upper case
 */
console.log(full_name.toUpperCase())

/**
 * Character at any index str[i]
 */
console.log(name.charAt(3))

/**
 * slicing
 */

console.log(full_name)
console.log(full_name.slice(2))
console.log(full_name.slice(2,5))
console.log(full_name.slice(-5))
console.log(full_name.slice(-5,-1))

/**
 * indexOf
 */
console.log(name.indexOf('z'))


/**
 * trim
 */
let word = " Vishwa "
console.log(word)
console.log(word.trim())

// split
name = "Vishwa Mohan Singh"

console.log(name.split(""))