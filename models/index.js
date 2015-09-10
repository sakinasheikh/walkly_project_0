var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/walkly_app");

module.exports.User = require("./users.js");
module.exports.CoolSpot = require("./CoolSpots.js");