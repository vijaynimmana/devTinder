const mongoose = require("mongoose");


const connectDB = async () => {
    mongoose.connect('mongodb+srv://vijaynimmana:cCypoMat9ZJN5VWX@node-learnings.fihqcnc.mongodb.net/DevTinder');
}


// if this is left here server calls wil get trigger befoire the DB is conected.
// for the cluster connection the baove url us  used , if wnated to connect to a specifc DB then DB name should be given.
// connectDB().then(() => {
//    console.log("Connection to DB is established");
// }).catch((err) => {
//     console.error("connection to DB is not established");
// })


module.exports = connectDB;