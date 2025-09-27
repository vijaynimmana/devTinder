const jwt = require("jsonwebtoken");
const User = require("../models/users");

const AuthData = (req, res,next) => {
    try{
    req = "test";
     if(req === "test"){
        res.send("Data fetched Sucessfully");
     }else {
        res.status(401).send("Un Authorized");
     }
    }catch(err){
        err = "Not Known";
        res.status(500).send(err)
    }
}


const userData = (req, res, next) => {
    req= "token1";
    if(req === "token"){
        res.send("Data fetched Sucessfully from UserData");
     }else {
        res.status(401).send("Un Authorized");
     }
}

const userAuth = async(req, res, next) => {
   try{ 
    const {token} = req.cookies;
    const userDeatils = await jwt.verify(token, 'DEVTINDDER@9070');
    // console.log(userDeatils);
    
    if(userDeatils){
        const {emailID} = userDeatils;
        // console.log(emailID);
        const user = await User.find({ emailID: emailID });
        console.log(user);
        if(user){
            req.user = user;
            next();
        }else {
            throw new Error("selected Data is not Allowed");
        }
    }
  }catch(err){
        res.send(err);
    }
}




module.exports = {AuthData,userData,userAuth}