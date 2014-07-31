'use strict';

var mongoose = require('mongoose'),
    NotebookSchema = mongoose.model('Notebook'),
    Schema = mongoose.Schema;

var NoteSchema = new Schema({
  name: String,
  url: String,
  type: String,
  description: String,
  tag: Array,
  comment: Array,
  rating: Number,
  notebook: [NotebookSchema],
  favorite: Boolean,
  active: Boolean
});

module.exports = mongoose.model('Note', NoteSchema);