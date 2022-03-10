const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandschema = new Schema({
  
  brand_id:{
      type:Number,
        required:true,
        
    },
  brand_name: {
    type: String,
    required: true,
  },
 
  
});

module.exports = mongoose.model("brandmodel", brandschema,"brand");
