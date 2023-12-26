const express=require('express')
const router=express.Router()
const userController=require('../controllers/user.js')



router
.get('/',userController.getAllUsers)
.get('/:id',userController.getUsers)
.post('',userController.createUsers)
.put('/:id',userController.replaceUsers)
.patch('/:id',userController.updateUsers)
.delete('/:id',userController.deleteUsers)

exports.router=router