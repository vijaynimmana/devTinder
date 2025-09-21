const mongoose = require('mongoose');

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
}, { timestamps: true }
)


const User = mongoose.model('User', UserSchema);

module.exports = User;