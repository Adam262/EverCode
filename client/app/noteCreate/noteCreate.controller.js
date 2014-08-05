'use strict';

angular.module('evercodeApp')
  .controller('NotecreateCtrl', function ($scope, $http, socket, Auth) {
    $scope.notes = [];

    $http.get('/api/notes').success(function(notes) {
      $scope.notes = notes;
      socket.syncUpdates('note', $scope.notes);
      $scope.currentUser = Auth.getCurrentUser();
    });

    $scope.addNote = function(noteParam) {
      if($scope.note === '') {
        return;
      }
      console.log("scope.note: ", $scope.note);
       // console.log("currentUser: ", $scope.currentUser);

      // $scope.note.notebooks.push($scope.note.tempNotebook);
      $http.post('/api/notes', { name: $scope.note.name, url:$scope.note.url, comments:$scope.note.comments, tags:$scope.note.tags, notebook: $scope.note.notebook.name, author: $scope.currentUser});
       console.log("noteForHTTPPost: ",$scope.note)
      $scope.note = {};
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