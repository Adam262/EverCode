'use strict';

angular.module('evercodeApp')
  .controller('UsersCtrl', function ($scope, $http, Auth, User) {
      $scope.currentUser = Auth.getCurrentUser();
      console.log("UsersCtrl, currentUser", $scope.currentUser);
      
  });
