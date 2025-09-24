const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }, lastName: {
        type: String,
        required: true
    }, emailID: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
          if(!validator.isEmail(value)){
            throw new Error("not a valid Email");
          }
        }
    }, age: {
        type: Number
    }, gender: {
        type: String,
        required: true,
        // validate(value){
        //  if(![male,female,others].includes(value)){
        //     throw new Error('Gender Data is not valid');
        //  }
        // }
    },
    photoURL: {
        type: String,
        required: false,
        default:"https://www.istockphoto.com/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays-gm1419410282-465774617",
        validate(value){
         if(!validator.isURL(value)){
            throw new Error("not a valid Email");
          }
        }
    },
    skills: [],
}, { timestamps: true }
)


const User = mongoose.model('User', UserSchema);

module.exports = User;