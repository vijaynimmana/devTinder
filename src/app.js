const express = require('express');
const app = express();
const connectDB = require('./config/database')
const User = require('./models/users')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const {userAuth} = require('./middlewares/auth')
// const {AuthData, userData}  = require('./middlewares/auth')

app.use(express.json());
app.use(cookieParser());

const {validateSignupData} = require('./utilis/validation');
// app.use('/getData/user' , AuthData);


app.post('/signUp', async(req, res) => {
    console.log(req.body);
    try{
      validateSignupData(req);
      const {firstName,lastName,emailID,gender} = req.body;
      const emailHash = await bcrypt.hash(gender, 10);

      const user = new User({
        firstName,
        lastName,
        emailID,
        gender:emailHash,
        
      });
    await user.save();
    res.status(200).send("Data Saved sucessfully");
    // res.status(201).json({
    //     message: "Data saved successfully",
    //     user: user
    // });
    // res.send("Data saved Sucessfully");
  }catch(err){
    console.log(`${err}: Error found`);
    res.status(400).send("Not saved sucessfully");
  }
})

app.get('/getUserData',async (req, res) => {
    const userEmail = req.body.emailID;
    // console.log(req.body);
    try{
      const userData = await User.find({emailID : userEmail});
      console.log(userData[0].emailID);
      if(userData.length != 0){
        res.status(200).send(userData);
      }else {
        res.send("No such users Found");
      }
    }catch(err){
       res.status(404).send("something went wrong");
    }
})

app.get('/getSingleUser' , async(req, res) => {
    const singleUser = req.body.emailID;
    try{
      const singleData = await User.findOne({emailID:singleUser});
      res.status(200).send(singleData.emailID);
    }catch(err){
     res.status(404).send("something went wrong");
    }
})

app.patch('/updateUser', async (req, res) => {
    const userData = req.body.id;
    console.log(userData);
    const newData = req.body;
    console.log(newData);
    
    try{
    const AllowedData = ["firstName", "lastName", "age" , "gender", "id", "skills", "photoURL"];
    const isAllowed = Object.keys(newData).every(k => AllowedData.includes(k));
    if(!isAllowed){
        throw new Error("selected Data is not Allowed");
    }
    if(newData.skills.length > 4){
        throw new Error("length  is not Allowed");
    }
    const updateduser = await User.findByIdAndUpdate(userData, newData, { runValidators: true });
    res.status(200).send(updateduser);
    }catch(err){
     res.status(404).send("something Went wrong");
    }
})


app.delete('/deleteUser', async (req,res) => {
    const deleteUserByID = req.body.id;
    console.log(deleteUserByID);
    const deleted = req.body;
    try{
        const deletedData = await User.findByIdAndDelete(deleteUserByID, deleted);
        res.status(200).send(deletedData);
    }catch(err){
        res.status(400).send("something Went Wrong");
    }
})
app.patch('/updateEmail', async (req,res) => {
    const userEmail = req.body.id;
    console.log(userEmail);
    const userEmailID = req.body.emailID;
    try{
        const emailData = await User.findByIdAndUpdate(userEmail, {emailID: userEmailID});
        res.status(200).send(emailData);
    }catch(err){
        res.status(400).send("something Went Wrong");
    }
})

app.post('/Login', async(req, res) => {
    const {emailID, gender} = req.body;
    try{
       const userEmail = await User.findOne({emailID:emailID});
       if(!userEmail){
        throw new Error("invalid Creds"); 
       }
       const comparing = await bcrypt.compare(gender,userEmail.gender);
       if(comparing){
        const token = await userEmail.userJWT();
        // console.log(token);
        res.cookie("token", token, {
            expires: new Date(Date.now() + 1 * 3600000)});
        res.send("Login Sucesful");
       }else{
        throw new Error("Login failed");
       }
    }catch(err){
       res.status(400).send("err:" + err.message);
    }
})

app.get("/profile", userAuth, async(req, res) => {
  try{
    // const cookie = req.cookies;
    // console.log(cookie);
    // if(Object.keys(cookie.token).length > 1){
    // const decodedmessage = await jwt.verify(cookie.token, "DEVTINDDER@9070");
    // console.log(decodedmessage.emailID);
    // const {emailID} = decodedmessage;
    // const findUser = await User.find({emailID:emailID});
    // console.log(req.userData);
    const {user} = req;
    // console.log(userData);
    if(user){
        res.send(user);
    }else{
        res.status(400).send("user not Found");
    // }
    }
}catch(err){
    res.status(400).send("cookie not received:" + err);
}
})


app.post('/sendConnectionRequest', userAuth, async(req,res) => {
    try{
        res.send("hello from connection req");
    }catch(err){
      res.status(400).send("zError");
    }
})




connectDB().then(() => {
    console.log("Connection to DB is established");
    app.listen(7777, () => {
        console.log("listening on port 7777");
    });
 }).catch((err) => {
     console.error("connection to DB is not established");
 })


// app.get('/getUsersData',userData, (req, res) => {
//       res.send("From Users Data");
// })

// app.get('/DataTest', (req, res, next) => {
//     try{
//         // err = "Data Issue";
//         throw new Error("jdhauud");
//         res.send("Dattata");
//     } catch (err){
//        res.status(401).send("Conatct team");
//     }
    
// })

// app.use('/', (err,req,res,next) => {
//     if(err){
//         res.status(401).send("from the error use");
//     }
// })



// app.use("/nextCases" , [(req, res, next) => {
//    console.log("next case");
// //    res.send("Hello from next series");
//    next();
// },(req, res, next) => {
//     console.log("next case");
//     // res.send("Hello from next 2 series");
//     next();
// },
// (req, res, next) => {
//     console.log("next case");
//     res.send("Hello from next 2 series");
//     // next();÷
// }])

// app.get(/fly$/, (req, res) => {
//     res.send({name:"regex", age:"100"});
// });
// app.get('/abc', (req, res) => {
//     console.log(req.query);
//     res.send({name:"krishna", age:30});
// });
// app.get('/abc/:userId/:password', (req, res) => {
//     console.log(req.params);
//     res.send({name:"vijay", age:30});
// });

// app.delete('/abc', (req, res) => {
//     // console.log(req.params);
//     res.send("Deleted sucessfully");
// });
// app.use('/test', (req, res) => {
//     res.send("Hello i'm from the Testserver");
// });

// app.use('/data', (req, res) => {
//     res.send("Hello i'm from the Dataserver");
// });

// app.use( "/", (req, res) => {
//     res.send("Hello from Empty");
// });

// app.get("/", (req,res) => {
//     res. send ("Hello from Vijay!");
//  });

// app.get("/hello", (req,res) => {
//     res. send ("Hello hello hello!");
//  });

// app.get("/bolo", (req,res) => {
//     res. send ("Bolo Bhai!");
//  });
// app.get("/userDeatils", (req,res) => {
//     res. send ("User Details");
//  });
// app.get("/Deatils", (req,res) => {
//     res. send ("Just Details");
//  });

