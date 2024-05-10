require('dotenv').config();

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");

const express = require("express");
const app = express();



var adminRoute = require('./routes/adminRoute');

app.use('/api', adminRoute);
app.get('/',(req,res)=>{
    res.send("saurav kumar")
});

app.listen(3000,function(){
    console.log('app is running on the port 3000');
});