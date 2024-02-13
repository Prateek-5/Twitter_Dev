import express from 'express';
import  {connect} from './config/database.js';
import bodyParser from 'body-parser';
import apiroutes from './routes/index.js';



const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiroutes);


app.listen(3500,async ()=>{
    console.log(`The server is running on PORT ${3500}`);
    await connect();
    console.log("MongoDB connected");
    

})  