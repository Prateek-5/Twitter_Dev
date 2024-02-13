import mongoose from 'mongoose';
/*
    Like sequelize mongoose is a ODM(object document model)

*/
export const connect = async () =>{
    await mongoose.connect('mongodb://localhost/twitter_Dev');
}
