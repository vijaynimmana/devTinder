const express = require('express');
const app = express();

app.use('/test', (req, res) => {
    res.send("Hello i'm from the Testserver");
});

app.use('/data', (req, res) => {
    res.send("Hello i'm from the Dataserver");
});

app.use( "/", (req, res) => {
    res.send("Hello from Empty");
});

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