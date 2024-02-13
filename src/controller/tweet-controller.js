import TweetService from "../services/tweet-service.js";

const tweetservice=new TweetService();
class TweetController{

    constructor(){
        
    }
    
    async create(req,res){
        
        try {
            const tweet=await tweetservice.create(req.body);
            return res.status(200).json({
                message:'Tweet Created successfully',
                success:true,
                error:{},
                response:{tweet},
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message:"Unable to create the tweet",
                success:false,
                error:{error},
                response:{}
            })
        }
    }




}

export default TweetController;
