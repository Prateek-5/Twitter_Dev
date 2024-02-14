import express from 'express';
import  {connect} from './config/database.js';
import bodyParser from 'body-parser';
import apiroutes from './routes/index.js';
import LikeRespository from './repository/like-repository.js';
import UserRepository from './repository/user-repository.js';



const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiroutes);


app.listen(3500,async ()=>{
    console.log(`The server is running on PORT ${3500}`);
    await connect();
    console.log("MongoDB connected");
    // const userrepo=new UserRepository();
    // const response1=await userrepo.create({
    //     email: "abc@gamil.com",
    //     password:"qwerty",
    //     name:"Mr. ABC"
    // })
    // console.log(response1);
    // const likerepos=new LikeRespository();
    // const response2=await likerepos.create({
    //     onModel:"Tweet",
    //     likeable:"65cbaff2d1b20607400ea9c6",
    //     user:"65cc802910813ee363ca8c89"
    // })
    
    // console.log(response2);

})  