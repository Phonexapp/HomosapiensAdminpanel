var express = require('express');
var cors = require('cors');
var app = express();
const mongoose = require("./MongoDB/MONGODB.js");
const AdminData = require("./models/collection.js");
const Sign=require("./SIGN/sign.js");
const Login=require("./LOGIN/Login.js");
const Home=require("./HOME/Home.js");



app.use(cors());
app.use(express.json());
app.use("/api/Sign",Sign);
app.use("/api/Login",Login);
app.use("/api/Home",Home);


app.listen(3001, (Err) => {
    if (Err) {
        console.log(Err);
    }
    else {
        console.log("Server Listening At Port 3001");
    }
})