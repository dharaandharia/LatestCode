const session = require("express-session");
const { dirname } = require('path');
const appDir = dirname(require.main.filename);
module.exports = (app) => {
    app.get('/productinsert',function(req,res){
        if(session.uname!=undefined)
        res.sendfile('app/view/productinsert.html',appDir)
        else
        res.redirect('/signin')
    });
const { insertproduct } = require("../controller/ProductinsertController");

app.post("/productinsert", insertproduct);
}
