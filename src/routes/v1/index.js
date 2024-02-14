import express  from "express";
import TweetController from "../../controller/tweet-controller.js";
import { toggleLike } from '../../controller/like-controller.js';
import {createComment} from '../../controller/comment-controller.js';

const router=express.Router();

const tweetcontroller=new TweetController();


router.post('/tweet',tweetcontroller.create);
router.get('/tweets/:id', tweetcontroller.getTweet);
router.post('/likes/toggle',toggleLike);    
router.post('/comments', createComment);



export default router;


