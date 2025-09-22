const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }, lastName: {
        type: String
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
    // photoURL: {
    //     required: true,
    //     validate(value){
    //         if(!validator.isURL(value)){
    //             throw new Error("not a valid Email");
    //         }
    //     }
    // },
    skills: [],
}, { timestamps: true }
)


const User = mongoose.model('User', UserSchema);

module.exports = User;