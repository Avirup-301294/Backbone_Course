var express = require('express'),
bodyParser  = require('body-parser'),
passport    = require("passport"),
cookieParser = require("cookie-parser"),
LocalStrategy = require("passport-local"),
flash = require('connect-flash'),
methodOverride = require("method-override"),
session = require("express-session"),
mongoose = require('mongoose'),
User = require("./models/user");
app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
var indexRoutes  = require("./routes/index");
var uri = process.env.BACKBONEURI ||`mongodb://localhost:27017/Alpha_Programming`;
mongoose.connect(uri,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
}).then(() => {
	console.log("connect to db");
}).catch(err => {
	console.log("Error:",err.message);
});
// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

// @home
app.use("/", indexRoutes);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log('Our app is running in port 3000....');
});
