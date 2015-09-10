var mongoose = require("mongoose");

mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/walkly_app");


module.exports.User = require("./users.js");
module.exports.CoolSpot = require("./CoolSpots.js");