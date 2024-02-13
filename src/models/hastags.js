import mongoose from 'mongoose';


const hastagSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    tweets:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
        }
    ]

},{timestamps:true})

const Hashtag=mongoose.model('Hashtag',hastagSchema);


export default Hashtag;
