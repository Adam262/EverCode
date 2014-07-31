/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Dropdown = require('./dropdown.model');

exports.register = function(socket) {
  Dropdown.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Dropdown.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('dropdown:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('dropdown:remove', doc);
}