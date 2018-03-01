
var User = require("../models/user");
var Post = require("../models/post");

var middlewareObject = {};

middlewareObject.checkPostOwnership = function(req,res,next){
    
     if(req.isAuthenticated()){
     
         Post.findById(req.params.id, function(err,foundPost){
        if(err){
            //req.flash("error","Campground not found")
            res.redirect("back");
        }else{
           // if(foundCampground.author.id === req.user._id) doesn't work because .author.id is an object
           if(foundPost.author.id.equals(req.user._id)){
            next();
            }else{
               // req.flash("error","You don't have permission to do that")
                res.redirect("back");
            }
        }
    });
    }else{
       // req.flash("error","You need to be logged in to do that")
        res.redirect("back");
    }
    

    
}
/*
middlewareObject.checkCommentOwnership = function(req,res,next){
    
     if(req.isAuthenticated()){
     
         Comment.findById(req.params.comment_id, function(err,foundComment){
        if(err){
            res.redirect("back");
        }else{
           // if(foundCampground.author.id === req.user._id) doesn't work because .author.id is an object
           console.log(foundComment);
           if(foundComment.author.id.equals(req.user._id)){
            next();
            }else{
                req.flash("error","You don't have permission to do that")
                res.redirect("back");
            }
        }
    });
    }else{
        req.flash("You have to be logged in to do that")
        res.redirect("back");
    }
    
}
*/


middlewareObject.isLoggedIn = function(req,res,next){
    
    if(req.isAuthenticated()){
        return next();
    }
    //req.flash("error","Please Login First!");
    res.redirect("/login");
}

middlewareObject.currentDate = function(){
   
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy= date.getFullYear();
    var currentdatestring = mm + '/' + dd + '/' + yyyy;
    return currentdatestring;
}







module.exports = middlewareObject;