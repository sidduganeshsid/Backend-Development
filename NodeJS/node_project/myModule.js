let add = (a,b) => {
    return a+b
}

let prod = (a,b) =>{
    return a*b
}

module.exports = add

// module.exports = prod

module.exports = {
    add : add,
    prod : prod
}

