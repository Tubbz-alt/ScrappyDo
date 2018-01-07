//Import the mongoose module
var mongoose = require('mongoose');

//Define User Schema
var Schema = mongoose.Schema;

var projectSchema = new Schema({
	parts: [String],
	link: String,
	name: String
});

var Project = mongoose.model('Project', projectSchema);

Project.create({parts: ['hey'], link: 'hey', name: 'hey'});
console.log('hey');

module.exports = {
	Project: Project
}

