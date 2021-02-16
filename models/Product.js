const mongoose=require('mongoose');
let ProductSchema=new mongoose.Schema({
title:{type:String,
    required:true},
company:{type:String,
    required:true},
img:{type:String,
    required:true},
price:{type:String,
    required:true},
description:{type:String,
     required:true},
})
module.exports = mongoose.model('Product',ProductSchema);