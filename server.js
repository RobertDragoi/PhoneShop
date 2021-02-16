const express=require('express');
const cors = require('cors');
const ConnectDataBase=require('./config/db');
//Create app
const PORT=process.env.PORT|| 5000
const app=express();
//Connect database
ConnectDataBase();
app.use(cors())
app.use(express.json({extended:false}))
app.get('/',(req, res)=>{});
app.use('/api/register',require('./routes/register'));
app.use('/api/login',require('./routes/login'));
app.use('/shop',require('./routes/shop'));
app.listen(PORT,()=>console.log(`Back-end running on port:${PORT}`))