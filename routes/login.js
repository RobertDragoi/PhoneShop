const express=require('express');
const router=express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const config=require('config');
const middleware=require('../middleware/middleware')
const User = require('../models/User');
//Login user
router.post('/',[
    check('email').isEmail().exists(),
    check('password').exists()
],async (req,res)=>{
//Validate credentials
const validationErrors=validationResult(req)
if(!validationErrors.isEmpty()){
    return res.status(400).json({errors:validationErrors.array()})
}
const {email,password}=req.body;
//Verify email
let user = await User.findOne({email})
try {
    if(!user){
        return res.status(400).json({msg:'Invalid email!'});
    }
    const isMatch= await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({msg:'Invalid password!'}); 
    }
    const payload={
        user:{
            id:user.id
        }
    }
    jwt.sign(payload,config.get('jwtSecret'),{expiresIn: 360000},(err,token)=>{
        if(err)throw err;
        res.json(token)
    })
} catch (error) {
    console.error(error.message);
        res.status(500).send(`Error logging`);
}


})
//Get logged in user
router.get('/',middleware,async (req,res)=>{ 
    try {
    const user=await User.findById(req.user.id).select('-password');
    res.json(user);
    } catch (error) {
    console.error(error.message);
    res.status(500).send('Error getting the user');
    }
} );
module.exports = router