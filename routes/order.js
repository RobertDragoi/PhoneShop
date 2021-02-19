const express=require('express');
const router=express.Router()
const Order=require('../models/Order');
router.post('/',async(req, res)=>{
try {
    const {customerId,products,price}=req.body
    let order=new Order({customerId,products,price})
    await order.save()
    res.json(order);
} catch (error) {
    res.status(500).send(`Error registering order!`);
}
})
module.exports = router