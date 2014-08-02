'use strict';

var mongoose = require('mongoose');
// console.log("NotebookSchema: ", mongoose.model('Notebook') )
var  NotebookSchema = mongoose.model('Notebook'),
     Schema = mongoose.Schema,
     ObjectId = Schema.Types.ObjectId;

var NoteSchema = new Schema({
  name: String,
  url: String,
  description: String,
  notebook: [NotebookSchema],
  dateAdded: {type: Date, default: Date.now},
  dateEdited: {type: Date, default: Date.now},
  active: {type: Boolean, default: true},
  tags: [{type: String}],
  comments: [{type: String}],
  rating: {type: Number, default: 0},
  favorite: {type: Boolean, default: false} 

});

// var CommentSchema = new Schema ({
//   body: String,
//   like: Number
//  });



module.exports = mongoose.model('Note', NoteSchema);
// console.log("NoteSchema: ", module.exports.base.modelSchemas.Note);