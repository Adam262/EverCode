/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Note = require('./note.model');

exports.register = function(socket) {
  Note.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Note.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('note:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('note:remove', doc);
}