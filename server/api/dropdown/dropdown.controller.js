'use strict';

var _ = require('lodash');
var Dropdown = require('./dropdown.model');

// Get list of dropdowns
exports.index = function(req, res) {
  Dropdown.find(function (err, dropdowns) {
    if(err) { return handleError(res, err); }
    return res.json(200, dropdowns);
  });
};

// Get a single dropdown
exports.show = function(req, res) {
  Dropdown.findById(req.params.id, function (err, dropdown) {
    if(err) { return handleError(res, err); }
    if(!dropdown) { return res.send(404); }
    return res.json(dropdown);
  });
};

// Creates a new dropdown in the DB.
exports.create = function(req, res) {
  Dropdown.create(req.body, function(err, dropdown) {
    if(err) { return handleError(res, err); }
    return res.json(201, dropdown);
  });
};

// Updates an existing dropdown in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Dropdown.findById(req.params.id, function (err, dropdown) {
    if (err) { return handleError(res, err); }
    if(!dropdown) { return res.send(404); }
    var updated = _.merge(dropdown, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, dropdown);
    });
  });
};

// Deletes a dropdown from the DB.
exports.destroy = function(req, res) {
  Dropdown.findById(req.params.id, function (err, dropdown) {
    if(err) { return handleError(res, err); }
    if(!dropdown) { return res.send(404); }
    dropdown.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}