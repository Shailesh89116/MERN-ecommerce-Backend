const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
require('dotenv').config({path:"./config.env"});
const connection=require("./connection/DatabaseConnection");
const mainRoute=require("./routes/main/mainRoute");
const errorHandler=require("./utils/errorResponse");
const { verifyTokenAndAdmin } = require('./middleware/auth');
const mainAdminRoute = require("./routes/main/mainAdminRoute")
const app=express();

app.use(cors());
app.use(bodyparser.json())

app.use("/api",mainRoute);
app.use("/admin",verifyTokenAndAdmin,mainAdminRoute)

app.use(errorHandler);

const PORT= process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Port listen on http://localhost:${PORT}`);
});