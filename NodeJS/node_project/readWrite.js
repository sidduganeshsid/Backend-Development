

const fs = require('fs');
console.log(typeof fs);

// const data = fs.readFileSync("input.txt")

console.log("Before the file");

// console.log("output is "+data);

//read file in the async way
fs.readFile('input.txt',(err,content)=>{
    if(err){
        return console.log(err);
    }
    console.log("output : "+content);
})
console.log("After the file reading");

console.log("before writing");
fs.writeFileSync("output.txt","hai I am sid")
console.log("after writing");



fs.writeFileSync("output2.txt","sidduganesh aakashganesh", err => {
    if(err){
        console.log(err);
    }
    console.log("success ful");
})
console.log("after async writing");


//write in async way
fs.writeFile("output3.txt","sidduganesh aakashganesh", err => {
    if(err){
        console.log(err);
    }
    console.log("successfully");
})
console.log("after async writing");