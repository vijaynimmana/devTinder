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

module.exports = {AuthData,userData}