'use strict';

angular.module('evercodeApp')
  .controller('NoteCtrl', function ($scope, $http, socket) {
    $http.get('/api/notes/noteTest').success(function(message){
      $scope.message = message;

      $scope.notes = [];

      $http.get('/api/notes').success(function(notes) {
        $scope.notes = notes;
        socket.syncUpdates('note', $scope.notes);

      $scope.deleteNote = function(note) {
      $http.delete('/api/notes/' + note._id);
    };

      $scope.editNote = function(note) {
      $http.put('/api/notes/' + note._id);
    };
    });
    })
  });

