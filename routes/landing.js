var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
    res.render("landing",{currentUser: req.user});
    //{currentUser: req.user} next to landing
});


module.exports = router;