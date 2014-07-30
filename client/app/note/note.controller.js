'use strict';

angular.module('evercodeApp')
  .controller('NoteCtrl', function ($scope, $http) {
    $http.get('/api/notes/noteTest').success(function(message){
      $scope.message = message;
    })
  });

