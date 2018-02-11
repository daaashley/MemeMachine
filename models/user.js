var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email:String,
    password:String,
    username:String,
    photo: String,
    rank: Number,
    dateCreated: Date,
    
    followers:[String],
    
    following:[String],
    
    tags: [String],
    
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});






userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("User",userSchema);