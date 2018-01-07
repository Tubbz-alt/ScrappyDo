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

module.exports = {
	Project: Project
}

