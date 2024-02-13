const express=require('express');
const  connect  = require('./config/database');
const app=express();


const TweetService=require('./services/tweet-service');


app.listen(3500,async ()=>{
    console.log(`The server is running on PORT ${3500}`);
    await connect();
    console.log("MongoDB connected");
    
    const service=new TweetService();
    const response=await service.create({
        content:"This is my first tweet really #exited about the same #wow",
    })
    console.log(response);


})  