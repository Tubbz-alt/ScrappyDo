//Import the mongoose module
var mongoose = require('mongoose');

//Define User Schema
var Schema = mongoose.Schema;

var partsSchema = new Schema({
	name: String
});

var Parts = mongoose.model('Parts', partsSchema);

var parts = ["Wheels","Bearings","Connecting Rods","Goods Holder Frame","Handle Rods",
"Support Rods","Mounts","Brackets","Supporting Frame","Joints","Screws", "small wooden shapes", "nails",
"Hot glue gun","Hammer","Screwdriver","Washable paint","Paint brushes","Vice","clamps","Hand drill",
"Raspberry Pi","Camera","Buzzer","LEDs","LCD Display","Resistors","Capacitors","Diodes",
"PIC16F8 series microcontroller","Transformer","IR LEDs","Transistors","Voltage Regulator","Photodiodes",
"PIC Microcontroller","LCD","Ultrasonic module","Servo Motor","Crystal", "Vehicle Body", "Hand Glove",
"Accelerometer","RF module","Encoder","Decoder","Atmega 328 Microcontroller","Motor driver IC","DC motors",
"Rectifier","Regulator","Alcohol Sensor","GSM Modem","Motor","Power Supply","Speaker","Raspberry Pi 3",
"Bluetooth Module","Android Application Device","Relay Driver","Lamps","Energy Meter","12V Transformer",
"Loads","Push Buttons","Arduino","Solar Panel","Solar Panel Mount","Stepper Motor","Arduino uno",
"Connectors","Cables","Pulley","Rubber Belts","Bed Frame","Temperature Sensor","Light Sensor","Voltage Sensor",
"Current Sensor","Peizo Electric Sensors","Multimeter","Footstep Body","Mobile Charger","GPS Module",
"RFID Reader","8051 Microcontroller","Gas Valve Motor","Exhaust Fan","9v Battery","Atmega Microcontroller",
"Ultrasonic module obstacle","Moisture Sensor","Touch Screen Display","Rf Transmitter","Rf Receiver"];

// for (var s in parts) {
// 	Parts.create({name: parts[s]}, function(err, data) {
// 		if (err) {console.log(err);}
// 		else {
// 			console.log("added " + s);
// 		}
// 	});
// }

module.exports = {
	Parts: Parts
}

