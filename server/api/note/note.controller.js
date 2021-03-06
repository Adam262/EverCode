'use strict';

var _ = require('lodash');
var Note = require('./note.model');

// Get list of notes
exports.index = function(req, res) {
  Note.find(function (err, notes) {
    if(err) { return handleError(res, err); }
    return res.json(200, notes);
  });
};

// Get a single note
exports.show = function(req, res) {
  Note.findById(req.params.id, function (err, note) {
    if(err) { return handleError(res, err); }
    if(!note) { return res.send(404); }
    return res.json(note);
  });
};

// Creates a new note in the DB.
exports.create = function(req, res) {
  var name = req.body.name;
  var url = req.body.url;
  var tags = req.body.tags;
  var comments = req.body.comments;
  var notebook =  {
        id: req.body.notebook._id,
        name: req.body.notebook.name
      };
  var author = {
        id: req.body.author._id,
        name: req.body.author.name
      };

  Note.create({
      name: name, 
      url: url, 
      tags: tags,
      comments: comments,
      notebook: notebook,
      author: author
      // notebook: notebook.name
    }, function(err, note) {
    if(err) { return handleError(res, err); }
    return res.json(201, note);
  });
};
//retrieves user

// Updates an existing note in the DB.
// exports.update = function(req, res) {
//   console.log("req.body: ", req.body);
//   if(req.body._id) { delete req.body._id; }
//   Note.findById(req.params.id, function (err, note) {
//     console.log("noteFound: ", note);
//     if (err) { return handleError(res, err); }
//     if(!note) { return res.send(404); }
//     var updated = _.merge(note, req.body);
//     console.log("updatedPreMerge: ", updated);
//     updated.markModified('tags');
//     updated.markModified('comments');
//     // updated.markModified('favorite');
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//        console.log("updated:", updated)
//       return res.json(200, note);

//     });
//   });
// };


// Updates an existing note in the DB.
exports.update = function(req, res) {
  console.log("req.body: ", req.body);
  if(req.body._id) { delete req.body._id; }
  Note.update({_id: req.params.id}, req.body, function (err, modified, raw) {
    Note.findById(req.params.id, function(err, note) {
            console.log("noteFound: ", err, modified, raw,  note);
          if (err) { return handleError(res, err); }
          // if(!note) { return res.send(404); }
          // var updated = _.merge(note, req.body);
      // console.log("updatedPreMerge: ", updated);
          // updated.markModified('tags');
          // updated.markModified('comments');
    // updated.markModified('favorite');
          // updated.save(function (err) {
      if (err) { return handleError(res, err); }
       // console.log("updated:", updated)
      return res.json(200, note);

      });
    })

  // });
};

// Deletes a note from the DB.
exports.destroy = function(req, res) {
  Note.findById(req.params.id, function (err, note) {
    if(err) { return handleError(res, err); }
    if(!note) { return res.send(404); }
    note.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};
//test route between BE and FE
exports.message = function(req,res){
  res.send('note test route worked')
};

function handleError(res, err) {
  return res.send(500, err);
}