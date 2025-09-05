const express = require('express');
const app = express();


// 

app.get(/fly$/, (req, res) => {
    res.send({name:"regex", age:"100"});
});
app.get('/abc', (req, res) => {
    console.log(req.query);
    res.send({name:"krishna", age:30});
});
app.get('/abc/:userId/:password', (req, res) => {
    console.log(req.params);
    res.send({name:"vijay", age:30});
});

app.delete('/abc', (req, res) => {
    // console.log(req.params);
    res.send("Deleted sucessfully");
});
app.use('/test', (req, res) => {
    res.send("Hello i'm from the Testserver");
});

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