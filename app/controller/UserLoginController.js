
const User = require("../model/UserLoginModel");
const bodyparser=require("body-parser");
const session = require("express-session");
require("dotenv").config();
exports.login=(req,res)=>{


User.find({username:req.body.txtuname,password:req.body.txtpass},function (err, user) {
   
        if(user[0]!=null)
        {
               // console.log("second if");
                session.uname=req.body.txtuname;
                //res.send(user[0].username);
                res.redirect("/productinsert")
    
        }
      else
      res.send("User does not exist")
    

})

}