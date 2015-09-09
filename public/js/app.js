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


$(document).ready(function(){
	getHomePage();
	getPersonalProfile();
})