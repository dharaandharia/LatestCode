const { dirname } = require('path');
const appDir = dirname(require.main.filename);
module.exports = (app) => {
    app.get('/signin',function(req,res){
        console.log("path="+appDir);
        res.sendfile('app/view/LoginForm.html',appDir)
    })
    const { login } = require("../controller/UserLoginController");

    app.post("/signin", login);
        
    
};