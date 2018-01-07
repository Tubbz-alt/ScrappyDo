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

<<<<<<< HEAD
=======
// Project.create({parts: ['hey'], link: 'hey', name: 'hey'});

>>>>>>> a7cca60ec58aa444491964d2ebcf8f4c05f5c8f2
module.exports = {
	Project: Project
}

