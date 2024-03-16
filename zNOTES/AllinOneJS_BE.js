console.log("JS backend with vishwa")


//////VARIABLES
/**
 * Name a variable
 * Rules
 * 1. a-z/A-Z/0-9/_/$
 * 2. Keywords (if, else , for ...)
 * 3. No space
 * 
 * Guidelines /Suggestions
 * 
 * 
 * Observations
 * 1.They are case sensitive ... sid, Sid, SID
 */

//variable declaration
// var name


//variable declaration and initialization
// var surName = "suryayan"

//////DATA TYPES
/**
 * 1. Primitive -> simple/immutable
 * 2. Non Primitive -> complex/ mutable
 */

//primitive : 8  types

// var name = "sidduganesh"
// var title = "software engineer"

// console.log(name);
// console.log(typeof name);

// var age = 22
// console.log(typeof age); //number

// //BigInt
// var big_num = 12343n
// console.log(typeof big_num); //bigint


// console.log(typeof NaN); //number
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined


//undefined means declared but not initialized yet.

//Symbol - unique (js object keys are unique their symbols are used)
// var s1 = Symbol()


//Objects
// var person = {
//     name : "sidduganesh",
//     age : 22
// }
// console.log(person); //{ name: 'sidduganesh', age: 22 }


////OPERATORS
//Assignment operator = 
//Arithmetic operator + - * / %  **
//Relational operator(comparative) //equality log(1==1) , // log(1=='1')//true //strict equality check // log(1==='1')
// log(1!=1) //log(1!=='1')
// > <  >=  <=

//Logical operators 
// ||(OR) &&(AND) ^(xor)

//Bitwise operators
// & bitwise and
// | bitwise or

// console.log(10 & 6); //2
// console.log(10 | 6); //14


// //conditionals

// if(num>20){console.log(num);}//what happen ?

// var num = 30
// if(num % 2 == 0)
// {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// //ternary operator -> if-else
// 13%2 == 0 ? console.log("even") : console.log("odd");

// var a = 10;

// if(a>=0) {
//     if(a>5){
//         console.log('a is greater than 0 and 5');
//     }else {
//         console.log('a is less than 0');
//     }
// }

// /**
//  * switch
//  */

// var fruit = "Apple"

// switch (fruit) {
//     case "Apple": console.log("Apple");break;
//     case "banana": console.log("banana");
//     case "dates": console.log("dates");

//     default: console.log("any fruit");
//         break;
// }


// ///LOOPS
// for (let i = 0; i < 10; i++) {
//     console.log("Hello sid");
// }

//infinite loop
// for (let i = 0;; i++) {
//     console.log("Hello sid");
// }
// for (let i = 0; i < 10;) {
//     console.log("Hello sid");
// }

//while
// let i = 0 //initialization
// while(i<10){ //condition
//     console.log("Hello students");
//     i++;//updation
// }
// //in JS ';' is optional

// for(let i=1;i<=50;i++){
// if(i%2==0){
//     console.log(i);
// }
// }

////continue and break
// for(let i=1;i<=10;i++){
//     if(i%2!=0){
//         continue;
//     }
//     console.log(i);
// }



////FUNCTION
// function test() {
//     console.log("Working");
// }

// //calling
// test();

// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(4,5))


//default values
// function sumOrDefaultSum(a=1,b=2) {
//     return a+b;
// }
// console.log(sumOrDefaultSum())

// function func(){
//     console.log(arguments);
// }
// func(1,3,5,35,2);

/**
 * var
 * 1. It's used to define a vairalbe
 * 2. I has function 
 */



let simrenPromise = new Promise((resolve, reject)=>{
    let parent;
    parent = true;
    if(parent){
        resolve("Simren lets get married rahul"+" = papa :",parent);
    }else {
        reject("Sorry rahul papa ne IAS dhond liya "+ " = papa :",parent);
    }
}).then((msg,parent)=>{
    console.log("Simren msg : "+msg," papa :"+parent);
}).catch((msg,parent)=>{
    console.log("Simren msg : "+msg," papa : "+parent);
}).finally(()=>{
    console.log("chalo life may clarity ayaa");
})


