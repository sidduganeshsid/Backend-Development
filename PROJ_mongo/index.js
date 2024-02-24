
const mongoose = require('mongoose');
const studentModel = require('./models/student.model');

/**
 * write the code to connect with MongoD
 * 
 */

mongoose.connect("mongodb://0.0.0.0/be_demodb") //if it runs on the other machine then instead of localhost, write its ip address , if in cloud the write the url of the mongoDB cloud.
//istead of localhost , 127.0.0.1 works , 0.0.0.0

const db = mongoose.connection //start the connection with MongoDB

db.on("error",()=>{
    console.log("Error while connecting to DB");
});

db.once("open", ()=>{
    console.log("Connected to MongoDB successfully.");
    //logic to insert the data into db
    init()

})

async function init(){
    //Logic to insert data in the DB
    const student = {
        name : "sidduganesh",
        age : 22
    }

    const std_obj = await studentModel.create(student)//goes to db and creates the collection and insert the document

    console.log(std_obj);
}
