/**
 * define the schema of Students collection to be 
 * stored in the DB
 */
const mongooose = require("mongoose")

//schema
const studentSchema = new mongooose.Schema({
    name: String,
    age: Number
})


//Go a head and create corresponding collection in DB
module.exports =  mongooose.model("Student", studentSchema)
//it is available across the project. bcz of export