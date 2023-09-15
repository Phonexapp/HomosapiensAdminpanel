const routers=require("express").Router();
const Data=require("../models/collection.js");
const JWT = require("jsonwebtoken");
const sceretkey = "seceretkey";

routers.post("/",async(req,res)=>{
    const UserDataName=req.body.username;
    const UserDataPassword=req.body.password;

    const User=await  Data.findOne({Username:UserDataName,Password:UserDataPassword})
    if(User){
        let token=JWT.sign({UserId:User._id},sceretkey,{expiresIn:"1h"})
        res.status(200).json({token})
    }
    else{
        console.log("User not There");
    }
})

module.exports=routers;