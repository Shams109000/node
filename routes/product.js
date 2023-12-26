const express=require('express')
const router=express.Router()
const productController=require('../controllers/product.js')



router
.get('/',productController.getAllProduct)
.get('/:id',productController.getProduct)
.post('',productController.createProduct)
.put('/:id',productController.replaceProduct)
.patch('/:id',productController.updateProduct)
.delete('/:id',productController.deleteProduct)

exports.router=router