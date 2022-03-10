const { dirname } = require('path');
const session=require("express-session");
const appDir = dirname(require.main.filename);
module.exports = (app) => {
    const { bindlist } = require("../controller/brandcontroller");
    app.get('/productfilter',function(req,res){

        if(session.uname!=undefined)
        res.sendfile("app/view/productfilter.html",appDir);
        else
        res.redirect('/signin')
       
      
    })
        
    }