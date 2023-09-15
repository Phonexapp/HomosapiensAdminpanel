const routers=require("express").Router();
const Data=require("../models/collection.js");

routers.post("/",async(req,res)=>{
    const UserDataname=req.body.username;
    const UserDataPassword=req.body.password;
    let UserData= await new Data({
        Username:UserDataname,
        Password:UserDataPassword
    })
    let UserDataSave= await UserData.save();
    console.log(UserDataSave);
})

module.exports=routers;