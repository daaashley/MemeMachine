var express = require("express");
var router = express.Router();
var passport = require("passport");





router.get("/",function(req,res){
    res.render("login");
    //{currentUser: req.user} next to landing
});

router.post("/login", passport.authenticate("local",
{
    successRedirect: "back",
    failureRedirect: "/login"
}),function(req,res){
    res.redirect("back");

});




module.exports = router;