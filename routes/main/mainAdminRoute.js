const Router=require("express");
const orderAdminRoute=require("../admin/orderAdminRoute")
const productAdminRoute=require("../admin/productAdminRoute")
const userAdminRoute=require("../admin/userAdminRoute");

const router=Router();

router.use("/user",userAdminRoute)
router.use("/order",orderAdminRoute);
router.use("/product",productAdminRoute);


module.exports=router