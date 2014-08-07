'use strict';

angular.module('evercodeApp')
  .controller('ShownoteCtrl', function ($scope, $http, noteFactory, $rootScope) {
      $rootScope.$watch("notes", function (newval, oldval){
          $scope.notes = newval;
      }) 
      $scope.getNotes = noteFactory.getNotes();
      console.log("$scope.getNotes: ", $scope.getNotes)
  });
