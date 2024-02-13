const express=require('express');
const  connect  = require('./config/database');
const app=express();


const TweetRepository=require('../src/repository/tweet-repository')

app.listen(3500,async ()=>{
    console.log(`The server is running on PORT ${3500}`);
    await connect();
    console.log("MongoDB connected");
    



})  