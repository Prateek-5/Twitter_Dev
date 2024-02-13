const mongoose= require('mongoose');

/*
    Like sequelize mongoose is a ODM(object document model)

*/
const connect = async () =>{
    await mongoose.connect('mongodb://localhost/twitter_Dev');
}

module.exports= connect;