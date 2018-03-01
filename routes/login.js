var express = require("express");
var router = express.Router();
var passport = require("passport");





router.get("/",function(req,res){
    res.render("login");
    //{currentUser: req.user} next to landing
});

router.post("/", passport.authenticate("local",
{
    
    successRedirect: "/",
    failureRedirect: "/login"
}),function(req,res){
    console.log("made it here");
    res.redirect("/");

});





module.exports = router;