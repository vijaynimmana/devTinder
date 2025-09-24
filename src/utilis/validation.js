const validator = require('validator');


const validateSignupData = (req) => {
    const {firstName, lastName,emailID,gender} = req.body;

    if(!firstName || !lastName){
        throw new Error("Name is mandatory");
    }

    if(!validator.isEmail(emailID)){
       throw new Error("valid Email ID is mandatory");
    }

    if(!["male", "female", "others"].includes(gender)){
        throw new Error("Gender is mandatory");
    }
}

module.exports = {validateSignupData};