const express=require("express");

const app=express();
const dbConfig=require("./config/db.config");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const session=require("express-session");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.bodyParser());
  app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    
    resave: false
}));
app.use(express.static(__dirname));
mongoose
  .connect(dbConfig.url, {
      
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
  require("./app/routes/UserLogin")(app);
  require("./app/routes/Product")(app);
  require("./app/routes/filterproduct")(app);
  require("./app/routes/fetchdata")(app);
  require("./app/routes/logout")(app);
  require("./app/routes/fetchbrand")(app);
  app.listen(4000, () => console.log("server is listening on port 4000"));
