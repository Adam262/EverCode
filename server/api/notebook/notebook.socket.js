/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Notebook = require('./notebook.model');

exports.register = function(socket) {
  Notebook.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Notebook.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('notebook:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('notebook:remove', doc);
}