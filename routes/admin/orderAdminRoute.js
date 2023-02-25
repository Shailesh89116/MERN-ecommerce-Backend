const express=require('express');

const orderController=require("../../controllers/admin/orderController");

const router=express.Router();

router.put("/:id",orderController.updateOrder);
router.delete("/:id",orderController.deleteOrder);
router.get("/",orderController.getOrders);
router.get("/income",orderController.monthlyIncome);

module.exports=router