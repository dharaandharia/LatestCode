module.exports = (app) => {
    const { bindlist, bindbrand } = require("../controller/brandcontroller");
    app.get('/fetchbrand',bindbrand)
        
        
    }