'use strict';

angular.module('evercodeApp')
  .controller('NotecreateCtrl', function ($scope, $http, socket) {
    $scope.notes = [];

    $http.get('/api/notes').success(function(notes) {
      $scope.notes = notes;
      socket.syncUpdates('note', $scope.notes);
    });

    $scope.addNote = function() {
      if($scope.note === '') {
        return;
      }
      $http.post('/api/notes', { name: $scope.note.name, url:$scope.note.url, description:$scope.note.description, notebook: $scope.note.notebook});
       console.log("noteForHTTPPost: ",$scope.note)
      $scope.newNote = {};
    };

    $scope.deleteNote = function(note) {
      $http.delete('/api/notes/' + note._id);
    };

    $scope.editNote = function(note) {
      $http.put('/api/notes/' + note._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('note');
    });
  });