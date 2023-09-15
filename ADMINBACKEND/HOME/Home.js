const routers = require("express").Router();
const JWT = require("jsonwebtoken");
const sceretkey = "seceretkey";
const Data = require("../models/collection.js");


function gettoken(req, res, next) {
    const Brearer = req.headers['authorization'];
    if (typeof Brearer !== "undefined") {
        const Data = Brearer.split(" ");
        token = Data[1];
        req.token = token;
    }
    else {
        console.log("Not a valid Token");
    }
    next();
}


routers.post("/", gettoken, (req, res) => {
    JWT.verify(req.token, sceretkey, (Err, UserData) => {
        if (Err) {
            res.status(300).json({ Message: "Server Error" })
        }
        else {
            let UserLoginID = Data.findOne({ _id: UserData.UserID })
            if (UserLoginID) {
                res.status(200).send({Message:"true"})
            }
        }
    })
})

module.exports = routers;
