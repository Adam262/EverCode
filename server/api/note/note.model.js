'use strict';

var mongoose = require('mongoose'),
    NotebookSchema = mongoose.model('Notebook'),
    Schema = mongoose.Schema;

var NoteSchema = new Schema({
  name: String,
  url: String,
  description: String,
  category: String,
  difficulty: Number,
  notebook: [NotebookSchema],
  active: Boolean
});

module.exports = mongoose.model('Note', NoteSchema);