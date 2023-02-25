const express=require('express');
const router=express.Router();

const productController=require("../../controllers/admin/productController");

router.post("/add",productController.createProduct);
router.put("/update",productController.updateProducts);
router.delete("/remove",productController.createProduct);

module.exports=router;
