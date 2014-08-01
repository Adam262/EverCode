'use strict';

angular.module('evercodeApp')
  .controller('NoteCtrl', function ($scope, $http, socket) {
    $http.get('/api/notes/noteTest').success(function(message){
      $scope.message = message;

      $scope.notes = [];
      //get all notes
      $http.get('/api/notes').success(function(notes) {
        $scope.notes = notes;
        socket.syncUpdates('note', $scope.notes);
      
      //get single note
      $scope.getSingleNote = function(note) {
      $http.get('/api/notes/' + note._id);
      }
      
      //delete single note
      $scope.deleteNote = function(note) {
      $http.delete('/api/notes/' + note._id);
    };

    //edit single note
    $scope.editNote = function(note) {
      note.tags.push(note.tempTag);
      delete note.tempTag;
      note.comments.push(note.tempComment);
      delete note.tempComment;
      $http.put('/api/notes/' + note._id, note).success(function() {
        console.log("note: ", note);
      });
    };

      $scope.voteUp = function(note) {
        note.rating++;
      }

      $scope.voteDown = function(note) {
        note.rating>0?note.rating--:note.rating=note.rating;
      }
    });
    })
  });

