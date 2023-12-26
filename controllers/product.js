const fs = require('fs');
const model = require('../model/product')
const mongoose = require('mongoose');
const Product = model.Product;
const express=require('express')
const server=express()
server.use(express.json())

// Create
exports.createProduct = async(req, res) => {
  const product = new Product(req.body);
  // product.title='iphone15'
  // product.price=799
  // await product.save()
  // res.status(201).json(product);
  try{
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
    console.log(req.body);
  }
  catch (error) {
    console.error(error);
    console.log(req.body,"req.body");
    res.status(400).json(error);
  } 
};

exports.getAllProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log({id})
  const product = await Product.findById(id);
  res.json(product);
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndDelete({_id:id})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};