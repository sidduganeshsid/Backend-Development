async function cse4yrs(){
    console.log("B.Tech 1st Yr");
    console.log("B.Tech 2nd Yr");

    let data = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Realization");
        },2000)
    })//line 1 to 9 is asynchronized

    let result = await data //start waiting for the data promise to be completed
    console.log(result);

    console.log("B.Tech 3rd Yr");
    console.log("B.Tech 4th Yr");
}
cse4yrs();

console.log("situations made me to realize");