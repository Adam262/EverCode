'use strict';

angular.module('evercodeApp')
  .controller('NotecreateCtrl', function ($scope, $http, socket) {
    $scope.notes = [];

    $http.get('/api/notes').success(function(notes) {
      $scope.notes = notes;
      socket.syncUpdates('note', $scope.notes);
    });

    $scope.addNote = function() {
      if($scope.newNote === '') {
        return;
      }
      $http.post('/api/notes', { name: $scope.newNote.name, url:$scope.newNote.url});
      $scope.newNote = {};
    };

    $scope.deleteNote = function(note) {
      $http.delete('/api/notes/' + note._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('note');
    });
  });