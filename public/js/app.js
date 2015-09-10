function getHomePage () {
	$.get("/", function (response_data) {
		console.log(response_data);
	});
}

function getPersonalProfile () {
	$.get("api/users/:id", function (response_data) {
		console.log(response_data);
		// $("#profile-info").append(response_data);
	});

} 

function manageBackground () {
	var images = [
	"http://www.carolhighsmithamerica.com/data/photos/86_1coit_tower_in_san_francisco.jpg", 
	"http://highincomerealestate.com/wp-content/uploads/2014/09/SanFrancisco2.jpg",
	"http://www.carolhighsmithamerica.com/data/photos/86_1coit_tower_in_san_francisco.jpg", 
	"http://highincomerealestate.com/wp-content/uploads/2014/09/SanFrancisco2.jpg"
	]
	var i = 0;
	setInterval(function(){
		console.log("hit interval");
		if (i === images.length -1) {
			i = 0;
		}
		var url = 'url( ' + images[i] +')';
		console.log(url);
		$("#title").css("background-image", url);
		$("#title").css("background-repeat", 'no-repeat');
		i++;
	}, 1500);
}


$(document).ready(function(){
	getHomePage();
	getPersonalProfile();
	manageBackground();
})