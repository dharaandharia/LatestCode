const session = require("express-session");
const { dirname } = require('path');
const appDir = dirname(require.main.filename);
module.exports = (app) => {
app.get('/logout',(req,res) => {
    console.log("logout route call"+session.uname);
    req.session.destroy();
    res.redirect('/signin');
})};