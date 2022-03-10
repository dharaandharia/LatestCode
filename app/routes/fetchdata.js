module.exports = (app) => {
    const { bindlist } = require("../controller/brandcontroller");
    app.get('/fetchdata',bindlist)
        
        
    }