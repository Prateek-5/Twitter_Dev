import express from 'express';
import  {connect} from './config/database.js';

const app=express();

import TweetService from './services/tweet-service.js';



app.listen(3500,async ()=>{
    console.log(`The server is running on PORT ${3500}`);
    await connect();
    console.log("MongoDB connected");
    const service=new TweetService();
    const response=await service.create({
        content:"This is my tweet from ES6 moduling #exited"
    })

})  