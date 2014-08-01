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
  notebook: [{type: ObjectId}],
  dateAdded: {type: Date, default: Date.now},
  dateEdited: {type: Date, default: Date.now},
  active: {type: Boolean, default: true},
      tags: {type: [String], index: true},
      comment: {type: [String], index: true, date: Date},
      rating: Number,
      favorite: {type: Boolean, default: false}
});

module.exports = mongoose.model('Note', NoteSchema);
// console.log("NoteSchema: ", module.exports.base.modelSchemas.Note);