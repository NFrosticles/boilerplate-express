let express = require('express');
require('dotenv').config();
let app = express();

//#1
//console.log("Hello World");


//#2
// app.get("/", (req, res) => {
//     res.send("Hello Express")
// })

//#4
app.use("/public", express.static(__dirname + "/public"));

//#3
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})


//#5 
//app.get("/json", (req, res) => {
 //   res.json({"message": "Hello json"});
//})
console.log(process.env.MESSAGE_STYLE)
//#6
app.get("/json", (req, res) => {
if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    } 
})



















 module.exports = app;
