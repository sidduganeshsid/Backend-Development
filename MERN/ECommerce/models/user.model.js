
const mongoose = require("mongoose");

/**
 * tracking the user's
 * name
 * userId
 * password
 * email
 * userType
 */
const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : trusted,
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 10,
        unique : true
    },
    userType : {
        type : String,
        required : true, //REDUNDENT
        default : "CUSTOMER",
        enum : ["CUSTOMER","ADMIN"]
    }


},{timestamps : true, versionKey : false})

module.exports = mongoose.model('User', userSchema)
