//Import the mongoose module
var mongoose = require('mongoose');

//Define User Schema
var Schema = mongoose.Schema;

var postSchema = new Schema({
  email: {
    type: String,
    default: 'Anonymous'
  },
  question: String,
  folder: String,
  answers: {
    type: [String],
    default: []
  }
});

var Post = mongoose.model('Post', postSchema);

module.exports = {
  Post: Post
}