const mongoose=require("../MongoDB/MONGODB");

const AdminData=new mongoose.Schema({
    Username:String,
    Password:Number
})

let Data =  new mongoose.model("signs", AdminData);


module.exports=Data;
