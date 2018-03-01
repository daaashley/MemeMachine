var express = require("express");
var router = express.Router();
var middleware = require("../middleware");
var Posts = require("../models/post");

//get route for post add page
router.get("/",middleware.isLoggedIn,  function(req,res){
    res.render("post");
    //{currentUser: req.user} next to landing
});


//post route for post add page

router.post("/",middleware.isLoggedIn, function(req,res){
     //get data from form and add to campgrounds array
    //redirect back to campgrounds page
    var url = req.body.memeurl;
    var caption = req.body.memecaption;
    var tags = req.body.tag.split(',');
    
    var date = middleware.currentDate();
    var likes = 0;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var post = {url:url,caption:caption,date:date,likes:likes,author:author};
    //create new campground and save to DB
    Posts.create(post, function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/feed");
        }
    });
    
    
   
});







    


module.exports = router;