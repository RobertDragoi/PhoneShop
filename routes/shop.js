const express=require('express');
const router=express.Router();

const Product=require('../models/Product');
//Get products
router.get('/',async(req,res)=>{
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        res.status(500).send('Error getting the products');
    }
})
//Get product detail
router.get('/:id',async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.json(product)
    } catch (error) {
        res.status(500).send('Error getting the products');
    }
})
module.exports = router