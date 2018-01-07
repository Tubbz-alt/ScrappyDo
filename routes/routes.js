var async = require('async');
var vogels = require('vogels');
var Joi = require('joi');
var AWS = require('aws-sdk');
vogels.AWS.config.loadFromPath('config.json');
vogels.AWS.config.update({
    region : "us-east-1"
}); // region must be set

var Component = vogels.define('Component', {
    hashKey : 'item',

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps : true,

    schema : {
        item : Joi.string()
    }
});

// Hard coding the partial parts list into DynamoDB 
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

Component.create(parts, function (err, acccounts) {
  console.log('added default parts');
});

var search = function(req,res) {
    console.log("Searching..." + req.query.key);
    var data = [];

    // Searches the vogels-defined Component table
    Component.scan().where('item').beginsWith(req.query.key).exec(
       function (err, resp) {
          if(err) {
            console.log('Error running scan', err);
          } else {
            console.log(resp.Items);
            var size = Object.keys(resp.Items).length;
            for (var i = 0; i < size; i++) {
                console.log(resp.Items[i].attrs.item);
                data.push(resp.Items[i].attrs.item);
            }
            console.log('Found', resp.Count, 'items');

            if (resp.ConsumedCapacity) {
                console.log('Scan consumed: ', resp.ConsumedCapacity);
            }
        }
        console.log(data);
        res.end(JSON.stringify(data));
    });
};

var routes = {
    search : search
};

module.exports = routes;