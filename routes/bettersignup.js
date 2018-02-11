var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

router.get("/",function(req,res){
    res.render("bettersignup");
    //{currentUser: req.user} next to landing
});
//sign up
router.post("/", function(req,res){
     //get data from form and add to campgrounds array
    //redirect back to campgrounds page
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var newUser= User({firstname:firstname,lastname:lastname,username:username,email:email,password:password});
    console.log(newUser);
   User.register(newUser, req.body.password, function(err,user){
        if(err){
            
            //req.flash("error",err.message);
            return res.render("bettersignup",{currentUser: req.user});
        }
        passport.authenticate("local",(req,res,function(){
            //req.flash("success","Welcome to YelpCamp " + user.username);
            res.redirect("/profile/:id",{currentUser:req.user});
        }));
    });
    
    
    
   
});


module.exports = router;