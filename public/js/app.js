function getHomePage () {
	$.get("/", function (response_data) {
		console.log(response_data);
	});
}


$(document).ready(function(){
	getHomePage()
})