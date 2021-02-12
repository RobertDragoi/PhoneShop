const express=require('express');
const { check, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const config=require('config');
const User = require('../models/User');
const router=express.Router();
//Register user
router.post('/',[
check('name').not().isEmpty(),
check('email').isEmail(),
check('age').isString(),
check('address').isString(),
check('password').isLength({min:6})
],async (req,res)=>{
//Validate credentials
const validationErrors=validationResult(req)
if(!validationErrors.isEmpty()){
    return res.status(400).json({errors:validationErrors.array()})
}
const {name,email,age,address,password}=req.body;
try {
    //Check if user already exists
    let user=await User.findOne({email});
    if(user){
        return res.status(400).json({msg:'User already exists!'});
    }
    //Create the user
    user=new User({name,email,age,address,password});
    //Hash the password
    const salt=await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(password,salt);
    await user.save();
    //Generate token
    const payload={
        user:{
            id:user.id           
        }
    }
    jwt.sign(payload,config.get('jwtSecret'),{expiresIn: 360000},
    (err,token)=>{
        if(err)throw err;
        res.json(token);  
    });
} catch (error) {
     console.error(error.message);
        res.status(500).send(`Error registering user ${email}!`);
}
})
module.exports=router;