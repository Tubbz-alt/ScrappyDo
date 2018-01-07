//Import the mongoose module
var mongoose = require('mongoose');

//Define User Schema
var Schema = mongoose.Schema;

var projectSchema = new Schema({
	parts: [String],
	link: String,
	name: String,
	image: String
});

var Project = mongoose.model('Project', projectSchema);

// var readd = function(object) {
// 	Project.remove({name: object.name}, function(e,d) {});
// 	var parts = object.parts;
// 	var newParts = [];
// 	for (var d = 0; d < parts.length; d++) {
// 		console.log("A part is " + parts[d]);
// 		var part = parts[d].toLowerCase();
// 		console.log(part);
// 		newParts.push(part);
// 	}

// 	Project.create({name: object.name, parts: newParts, link: object.link}, function(err, dat) {});
// }

// Project.find({}, function(err, data) {
// 	for (var i in data) {
// 		readd(data[i]);
// 	}
// });

module.exports = {
	Project: Project
}

