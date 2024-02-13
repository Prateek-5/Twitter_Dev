import express  from "express";
import TweetController from "../../controller/tweet-controller.js";
const router=express.Router();

const tweetcontroller=new TweetController();


router.post('/tweet',tweetcontroller.create);



export default router;


