'use strict';

angular.module('evercodeApp')
  .controller('NotebookcreateCtrl', function ($scope, $http, $location, socket) {
    $scope.notebooks = [];

    $http.get('/api/notebooks').success(function(notebooks) {
      $scope.notebooks = notebooks;
      socket.syncUpdates('notebook', $scope.notebooks);
    });


    $scope.addNoteBook = function() {
      if($scope.notebook === '') {
        return;
      }

      $http.post('/api/notebooks', { name: $scope.notebook.name, description: $scope.notebook.description}).then(function(){
          $location.path('/');
      });
       console.log("noteForHTTPPost: ",$scope.notebook)
      $scope.newNote = {};
    };

    $scope.deleteNoteBook = function(note) {
      $http.delete('/api/notebooks/' + notebook._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('notebook');
    });
  });
