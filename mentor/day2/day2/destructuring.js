/**
 * Destructuring in arrays
 */

/** 
const nums = [1,2,3]

const [a,b,c,d] = [1,2,3]
console.log(a)
console.log(b)
console.log(c)
console.log(d)


const [p,q,r] = [1,2,[4,5,6]]

console.log(p)
console.log(q)
console.log(r) **/



/**
 * Destructuring in an object
 */

const per = {
    age : 99,
    name : "Vishwa",
    city : "Bangalore",
    address : {
        city : "Banaglore",
        state : "karnataka"
    }
}

const  { name, age, address : {city, state} } = per

console.log(name)
console.log(age)
console.log(city)