'use strict';

var mongoose = require('mongoose');
    //relationship = require("mongoose-relationship");
    // console.log("NoteSchema: ", mongoose.model('Note') );
var Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var NotebookSchema = new Schema({ 
  name: String,
  description: String,
  dateAdded: {type: Date, default: Date.now},
  dateEdited: {type: Date, default: Date.now},
  parent: {type: ObjectId, default: null},
  note: {type: ObjectId, default: null},
  author: ObjectId,
  btn: String,
  link: String,
  active: {type: Boolean, default: true}
});
console.log("NotebookSchema: ", NotebookSchema);
module.exports = mongoose.model('Notebook', NotebookSchema);
console.log("NoteSchema: ", module.exports.base.modelSchemas.Note);