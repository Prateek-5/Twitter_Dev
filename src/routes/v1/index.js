import express  from "express";
import TweetController from "../../controller/tweet-controller.js";
import { toggleLike } from '../../controller/like-controller.js';
const router=express.Router();

const tweetcontroller=new TweetController();


router.post('/tweet',tweetcontroller.create);
router.post('/likes/toggle',toggleLike);    



export default router;


