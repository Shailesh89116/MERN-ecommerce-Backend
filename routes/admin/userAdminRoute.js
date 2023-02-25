const express=require('express');
const userController=require("../../controllers/admin/userController")
const router=express.Router();

router.put('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);
router.get('/find/:id',userController.findUser);
router.get('/allusers',userController.allUsers);
router.get('/stats',userController.stats);

module.exports=router