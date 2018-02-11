var express = require("express");
var router = express.Router();
var User = require("../models/user");
var middleware = require("../middleware");

router.get("/",function(req,res){
    
   res.render("profile");
});


module.exports = router;