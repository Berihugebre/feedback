const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    feedback:{
        type:String,
        require:true,
    }
});

module.exports=mongoose.model('Comment', CommentSchema)