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