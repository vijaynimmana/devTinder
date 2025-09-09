const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        typeof : String
    },lastName: {
        typeof : String
    },emailID: {
        typeof : String
    },age:{
        typeof : Number
    }, gender: {
        typeof : string
    }
})


const User = mongoose.model('User', UserSchema);

module.exports = User;