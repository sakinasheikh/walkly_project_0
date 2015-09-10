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

db.User.update

hardCodedImages = [{
	pictureUrl: http://www.carolhighsmithamerica.com/data/photos/86_1coit_tower_in_san_francisco.jpg, 
	lat: 37.802395, 
	lon: -122.405822, 
	userId: 1
}, 
	{
	pictureUrl: http://www.allvietnam.com/wp-content/uploads/2015/06/Cau-cong-vang-My1.jpg,
	lat: 37.819929, 
	lon: -122.478255, 
	userId: 1	
	}
	pictureUrl: http://extras.sfgate.com/img/travel/missionvalbig.jpg, 
	lat: 37.759703, 
	lon: -122.428093, 
	userId: 1
}]






