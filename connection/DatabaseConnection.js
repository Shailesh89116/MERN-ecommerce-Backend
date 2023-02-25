const mongoose=require('mongoose');
mongoose.set("strictQuery", false);
const connection= mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database Successfully Connected");
}).catch((error)=>{
    console.log(error);
});


module.exports=connection; 