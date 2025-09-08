const express = require('express');
const app = express();
const {AuthData, userData}  = require('./middlewares/auth')


app.use('/getData/user' , AuthData);

app.get('/getUsersData',userData, (req, res) => {
      res.send("From Users Data");
})

app.get('/DataTest', (req, res, next) => {
    try{
        // err = "Data Issue";
        throw new Error("jdhauud");
        res.send("Dattata");
    } catch (err){
       res.status(401).send("Conatct team");
    }
    
})

app.use('/', (err,req,res,next) => {
    if(err){
        res.status(401).send("from the error use");
    }
})



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

app.listen(7777, () => {
    console.log("listening on port 7777");
});