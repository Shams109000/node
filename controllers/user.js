const fs=require("fs");
const path=require('path')
const data=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data.json')),'utf-8')
const users=data.users
exports.getAllUsers=(req,res)=>{
    res.json(users)
  }
exports.getUsers=(req,res)=>{
    const id=+req.params.id
    const user=users.find((p)=>{return p.id==id})
    res.json(user)
  }
  exports.createUsers=(req,res)=>{
    users.push(req.body)
    res.status(201).json(req.body)
  }
  exports.replaceUsers=(req,res)=>{
    const id=+req.params.id
    const findIndex=users.findIndex((p)=>p.id==id)
    users.splice(findIndex,1,{id:id,...req.body})
    res.status(201).json()
  }
  exports.updateUsers=(req,res)=>{
    const id=+req.params.id
    const findIndex=users.findIndex((p)=>p.id==id)
    const user=users[findIndex]
    users.splice(findIndex,1,{...user,...req.body})
    res.json({type:"PATCH"})
  }
  exports.deleteUsers=(req,res)=>{
    const id=+req.params.id
    const findIndex=users.findIndex((p)=>p.id==id)
    const user=users[findIndex]
    users.splice(findIndex,1)
    res.json({type:"DELETE",data:user})
  }