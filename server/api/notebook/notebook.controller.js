'use strict';

var _ = require('lodash');
var Notebook = require('./notebook.model');

// Get list of notebooks
exports.index = function(req, res) {
  Notebook.find(function (err, notebooks) {
    if(err) { return handleError(res, err); }
    return res.json(200, notebooks);
  });
};

// Get a single notebook
exports.show = function(req, res) {
  Notebook.findById(req.params.id, function (err, notebook) {
    if(err) { return handleError(res, err); }
    if(!notebook) { return res.send(404); }
    return res.json(notebook);
  });
};

// Creates a new notebook in the DB.
exports.create = function(req, res) {
  Notebook.create(req.body, function(err, notebook) {
    if(err) { return handleError(res, err); }
    return res.json(201, notebook);
  });
};

// Updates an existing notebook in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Notebook.findById(req.params.id, function (err, notebook) {
    if (err) { return handleError(res, err); }
    if(!notebook) { return res.send(404); }
    var updated = _.merge(notebook, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, notebook);
    });
  });
};

// Deletes a notebook from the DB.
exports.destroy = function(req, res) {
  Notebook.findById(req.params.id, function (err, notebook) {
    if(err) { return handleError(res, err); }
    if(!notebook) { return res.send(404); }
    notebook.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}