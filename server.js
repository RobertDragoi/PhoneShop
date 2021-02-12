const express=require('express');
const ConnectDataBase=require('./config/db');
//Create app
const PORT=process.env.PORT|| 5000
const app=express();
//Connect database
ConnectDataBase();
app.use(express.json({extended:false}))
app.get('/',(req, res)=>res.json({msg:"Welcome", author:"Robert"}));
app.use('/api/register',require('./routes/register'));
app.use('/api/login',require('./routes/login'))
app.listen(PORT,()=>console.log(`Back-end running on port:${PORT}`))