const express=require('express')
const server=express()
const mongoose = require('mongoose');
const cors=require('cors')
const path=require('path')
const productRouter=require('./routes/product.js')
const userRouter=require('./routes/user.js')
require('dotenv').config()
// 


// db connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("mongodb");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



// body parser
server.use(cors())
server.use(express.json())
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
server.use('/products',productRouter.router)
server.use('/users',userRouter.router)
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
  // res.sendFile(__dirname+'/build/index.html')
 
})


server.listen(process.env.PORT,()=>{console.log("server started");})






















