var db = require("./models")

//data



//create a secure user
// db.User.createSecure("marcel@gmail.com", "123", function (err, user) {
// 	console.log("Success", user);
// })

// clear and seed the database
// db.Users.remove({}, function (err, users) {

// 	db.Users.create(firstUser, function (err, users) {
// 		if(err) return console.log(err);
// 		console.log(firstUser)
// 	})
// })


// search who is in the database

db.User.find({}, function (err, users) {
	console.log(users);
})