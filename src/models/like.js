import mongoose from "mongoose";



const likeSchema = new mongoose.Schema({
    /*
        The following schema store the kind of entity that we wich to store be it a Tweet or a Comment 
        if input type is String but we are restricted to store only the Tweet or Comment
    
    */
    onModel: {
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    /*
        The following store the onModeld id means weather you have liked the tweet or a comment it stores their respective ID
        means if we have store the Tweet it will store the TweetId if we have store the Comment it will store the commentID
    */
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    /*
        The following will store the userID to the user which liked the comment or tweet 
    */
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true});

const Like = mongoose.model('Like', likeSchema);

export default Like;