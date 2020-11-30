var mongoose = require("mongoose");
var productschema = mongoose.Schema({
    name:String,
    price:Number,
    color:String,
    size: String,
});
const productmodel = mongoose.model("products",productschema);

module.exports=productmodel;