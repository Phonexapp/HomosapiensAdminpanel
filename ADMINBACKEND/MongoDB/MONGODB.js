const mongoose=require("mongoose");
const url="mongodb://0.0.0.0:27017/AdminDetail";
mongoose.connect(url).then(()=>{
        console.log("DataBase Connected");
})
// console.log(mongoose.connection.readyState);


module.exports=mongoose;