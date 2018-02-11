var mongoose = require("mongoose");


//SCHEMA SETUP
var postSchema = new mongoose.Schema({
    url: String,
    date: String,
    tags: [String],
    caption: String,
    likes: Number,
    author: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }
    //An array of comment Id'
});

module.exports = mongoose.model("Post",postSchema);