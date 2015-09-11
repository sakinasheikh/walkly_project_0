var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CoolSpotSchema = new Schema({
    type: String,
    // the below two variables might have to be played with extensively.
    // If its insanely difficult, just save the name of the location.
    geometry: Object,
    properties: Object,
    createdAt: {type: Date, default: Date.now()}
});

var CoolSpot = mongoose.model("CoolSpot", CoolSpotSchema);
module.exports = CoolSpot;
