var express = require("express");
var router = express.Router();
var passport = require("passport");


router.get("/",function(req,res){
    req.logout();
    console.log("logged out");
    //req.flash("success", "Logged you out!")
    res.redirect("/");
});

module.exports = router;