'use strict';

angular.module('evercodeApp')
  .controller('NotebookcreateCtrl', function ($scope, $http, $rootScope, $location, socket, Auth) {
    $scope.notebooks = [];
    $scope.currentUser = Auth.getCurrentUser(); 
    console.log($scope.currentUser);

    $http.get('/api/notebooks').success(function(notebooks) {
      $scope.notebooks = notebooks;
      socket.syncUpdates('notebook', $scope.notebooks);
    });


    $scope.addNoteBook = function() {
      if($scope.notebook === '') {
        return;
      }
      //generate button color + link;
      var colors = ["primary", "danger", "info", "success", "warning"];

            function getRandom(arr) {
                var num = Math.floor(Math.random() * arr.length);
                return arr[num];
      }
      $scope.notebook.btn = getRandom(colors);
      $scope.notebook.link = "/" + $scope.notebook.name;
      console.log("btn, link:",  $scope.notebook.btn,  $scope.notebook.link)
       
      $http.post('/api/notebooks', { name: $scope.notebook.name, description: $scope.notebook.description, isPrivate: $scope.notebook.isPrivate, author: $scope.currentUser, btn:$scope.notebook.btn, link:$scope.notebook.link}).success(function(){
          $location.path('/note'); 
      });
       console.log("noteForHTTPPost: ",$scope.notebook)
      $scope.notebook = {};
    };

    $scope.deleteNoteBook = function(note) {
      $http.delete('/api/notebooks/' + notebook._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('notebook');
    });
  });
