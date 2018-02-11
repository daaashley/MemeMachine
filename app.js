var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");


//Model Imports
var landingRoutes = require("./routes/landing");
var feedRoutes = require("./routes/feed");
var bettersignupRoute = require("./routes/bettersignup");
var loginRoute = require("./routes/login");
var profileRoute = require("./routes/profile");
var postRoute = require("./routes/post");

var User = require("./models/user");

var url = process.env.DATABASEURL || "mongodb://127.0.0.1:27017";
mongoose.connect(url);

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));
app.use("/",landingRoutes);
app.use("/feed",feedRoutes);
app.use("/login",loginRoute);
app.use("/bettersignup",bettersignupRoute);
app.use("/profile",profileRoute);
app.use("/post",postRoute);


app.use(require("express-session")({
    secret: "fuckingshit",
    resave: false,
    saveUninitialized: false
}));

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));



passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());







//environment variables
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The Meme server has started!");
});