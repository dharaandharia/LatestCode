
const product = require("../model/Productinsertmodel");
const { v4: uuid } = require("uuid");
require("dotenv").config();
exports.insertproduct=(req,res)=>{

    product_obj =  new product({
        
      b_id: req.body.drpbrand,
       p_name: req.body.pname,
        p_price: req.body.pprice,
        
      });

console.log("brand="+req.body.drpbrand);
product_obj.save();
res.redirect("/productinsert");
//res.sendFile("e:/dhara/PracticalTest/app/view/productinsert.ejs")
}