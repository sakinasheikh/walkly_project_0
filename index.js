var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var db = require("./models");
var session = require("express-session");
var ejs = require("ejs");
var keygen = require("keygenerator");
var methodOverride = require("method-override");
var views = path.join(process.cwd(), "views/");

// CONFIG //
//////////////////////////////////////////////
// serve js & css files

app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

//////////////////////////////////////////////
// create a session
app.use(
	session({
		//use keygen to generate a secret key
		secret: keygen._({specials: true}),
		resave: false, 
		saveUninitialized: true
	})
);

//////////////////////////////////////////////
// extending the req object to manage sessions
app.use(function (req, res, next) {
	//login a user
	req.login = function (user) {
		req.session.userId = user._id;
		console.log("the req.session.userid is", req.session.userId) 
	};
	//find the current user
	req.currentUser = function (cb) {
		db.User.findOne({_id: req.session.userId }, function (err, user) {
			req.user = user; 
			cb(null, user);
		})
	};
	//logout the current user
	req.logout = function () {
		req.session.userId = null;
		req.user = null; 
	}
	//call the middleward in the stack
	next();
});
//////////////////////////////////////////////
// routes

//homepage
app.get("/", function (req, res) {
	res.sendFile(views + "/index.html");
})

//profiles page
app.get(["/profile", "/api/users/id"], function (req, res) {
	req.currentUser(function (err, currentUser) {
		console.log(currentUser)
		if (err || currentUser === null) {
			res.redirect("/")
		} else {
		res.sendFile(views + "/profiles.html");
		}
	})
})

//sign up
app.post("/api/users", function createUser (req, res) {
	console.log("the signup route")
	db.User.createSecure(req.body.email, req.body.password, function (err, users) {
		if(err) {
			console.log("error!", err);
			res.redirect("/");
		} else {
			console.log("success!");
			req.login(users);
			res.redirect("/profile");
		}
	})
})

//login
app.post(["/login", "/api/sessions"], function signInUser (req, res) {
	console.log("the login route")
	db.User.authenticate(req.body.email, req.body.password, function (err, users) {
		if(err) {
			console.log(err);
			res.redirect("/");
		} else {
			req.login(users);
			res.redirect("/profile");
		}
	})
})

//logout
app.delete(["/sessions", "/logout"], function (req, res) {
	console.log("the delete route")
	req.logout();
	res.redirect("/");
}) 

//maps page
app.get("/maps", function (req, res) {
	console.log("the maps route")
	res.sendFile(views + "/maps.html");
})


//search for a city 
app.post("/api/city", function handleCity (req, res) {
	console.log(req.body.city)
	res.send(req.body)
})



//////////////////////////////////////////////////////
// Server
app.listen(3000, function (){
  console.log("listening on port 3000");
});