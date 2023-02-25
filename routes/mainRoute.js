const Router=require('express');
const { verifyTokenAndAdmin, verifyToken } = require('../middleware/auth');
const authRoute = require("./userRoutes/authRoute");
const mainAdminRoute=require("./mainAdminRoute");

const router=Router();

router.use("/auth",authRoute);




module.exports=router