//Import the mongoose module
var mongoose = require('mongoose');
var stemmer = require('porter-stemmer').stemmer;

//Define User Schema
var Schema = mongoose.Schema;

var partsSchema = new Schema({
	name: String,
	stemmed: String
});

var Parts = mongoose.model('Parts', partsSchema);

var parts = ["wheels","bearings","connecting rods","goods holder frame","handle rods",
"support rods","mounts","brackets","supporting frame","joints","screws", "small wooden shapes", "nails",
"hot glue gun","hammer","screwdriver","washable paint","paint brushes","vice","clamps","hand drill",
"raspberry pi","camera","buzzer","leds","lcd display","resistors","capacitors","diodes",
"pic16f8 series microcontroller","transformer","ir leds","transistors","voltage regulator","photodiodes",
"pic microcontroller","lcd","ultrasonic module","servo motor","crystal", "vehicle body", "hand glove",
"accelerometer","rf module","encoder","decoder","atmega 328 microcontroller","motor driver ic","dc motors",
"rectifier","regulator","alcohol sensor","gsm modem","motor","power supply","speaker","raspberry pi 3",
"bluetooth module","android application device","relay driver","lamps","energy meter","12v transformer",
"loads","push buttons","arduino","solar panel","solar panel mount","stepper motor","arduino uno",
"connectors","cables","pulley","rubber belts","bed frame","temperature sensor","light sensor","voltage sensor",
"current sensor","peizo electric sensors","multimeter","footstep body","mobile charger","gps module",
"rfid reader","8051 microcontroller","gas valve motor","exhaust fan","9v battery","atmega microcontroller",
"ultrasonic module obstacle","moisture sensor","touch screen display","rf transmitter","rf receiver"];

// for (var s in parts) {
// 	Parts.create({name: parts[s], stemmed: stemmer(parts[s].toLowerCase())}, function(err, data) {
// 		if (err) {console.log(err);}
// 		else {
// 			console.log("added " + parts[s]);
// 		}
// 	});
// }

module.exports = {
	Parts: Parts
}

