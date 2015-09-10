var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CoolSpotSchema = new Schema({
	pictureUrl: String, 
	lat: Number, 
	lon: Number, 
	userId: Number
})

var CoolSpot = mongoose.model("CoolSpot", CoolSpotSchema);
module.exports = CoolSpot;
