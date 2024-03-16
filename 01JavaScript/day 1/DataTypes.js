//two types
/**
 * 1.Primitive = means simple/immutable
 * 2.Non-Primitive = means complex and mutable.
 */

//Primitive = 8 types => Number, String.....

/** PRIMITIVE DATA TYPES 

//String is a sequence of characters

var fName = "Siddu"
var mName = 'Ganesh'
var lName = "Musa"
console.log("Full Name : "+lName+" "+fName+" "+mName);


//typeof operator

console.log(typeof fName);
console.log(typeof(lName));

//Number
var age = 22;
var height = 5.65;
console.log(typeof height);

//BigInt = indicates the valide bignumber , add suffix of n
var big_num = 73343_23432n;
console.log(typeof big_num);
console.log(big_num);
    //NaN
console.log(typeof NaN);//Number

    //null
console.log(typeof null);//known bug is JS which is not fixed in js
                        //o/p object //null datatype is object

var name
console.log(name);//undefined
//means variable is declared but not initialized
//when var is initialized to null //means it is done intentionally.
var Surname = null
console.log(Surname);


//boolean
console.log(typeof true)


//new datatype in JS
//Symbol
var s2 = Symbol() //() constructor //Symbol object
console.log(typeof s2);//symbol
//to ensure the keys are unique in JS , symbols are used.



PRIMITIVE DATA TYPES ENDED */

//Non-Primitive = object

//to represent something of realworld to programming world we need to represent it as object.
//object has 2 things : attributes/fields/properties and behaviours = oops
//eg: humans compare with car then represent in programming
//OOPS core is object

//syntax => var obj_name = {key: value, key2: value}
//values can be any datatype

//Object
var person = {
    flName : "Siddu Ganesh Musa",
    dob : "09Sep2001"   
}

console.log(person);//{ flName: 'Siddu Ganesh Musa', dob: '09Sep2001' }
console.log(typeof person);//object

