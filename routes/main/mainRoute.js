const Router=require('express');
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('../../middleware/auth');
const authRoute = require("../users/authRoute");
const orderRoute = require("../users/orderRoute");
const productRoute = require("../users/productRoute");
const cartRoute = require("../users/cartRoute");
const stripeRoute = require("../users/stripeRoute");


const router=Router();

router.use("/auth",authRoute);
router.use("/order",verifyTokenAndAuthorization,orderRoute);
router.use("/products",productRoute);
router.use("/cart",verifyTokenAndAuthorization,cartRoute);
router.use("/payment",stripeRoute);

module.exports=router