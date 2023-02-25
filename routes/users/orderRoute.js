const express=require('express');
const router=express.Router();

const orderController=require("../../controllers/loggedInUser/orderController");

router.post("/",orderController.newOrder);
router.get("/find/:id",orderController.getUserOrder);

module.exports=router;