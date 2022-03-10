const { response } = require("express");
const product = require("../model/Productinsertmodel");
const brand=require("../model/brandmodel");
require("dotenv").config();
exports.bindlist=(req,res)=>{
    var bid=req.query.v;
    product.find({b_id:bid},function(err,data){
        res.send(data);
    })
}
exports.bindbrand=(req,res)=>{
    console.log("bind brand call");
brand.find({},function(err,data){
    res.send(data);
})
}
