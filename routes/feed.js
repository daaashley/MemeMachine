var express = require("express");
var router = express.Router();
var middleware = require("../middleware");

router.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

router.get("/",middleware.isLoggedIn,function(req,res){
    
    res.render("feed",{currentUser: req.user});
    //{currentUser: req.user} next to landing
    
});


module.exports = router;