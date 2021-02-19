const mongoose = require('mongoose')
let OrderSchema=new mongoose.Schema({
    customerId:{type:String,
    required:true,},
    products:{type:[String],
    required:true},
    price:{type:Number,
    required:true},
    date:{type:Date,
        required:true,
        default:Date.now}
})
module.exports=mongoose.model('Order',OrderSchema);