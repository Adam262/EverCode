'use strict';

angular.module('evercodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'app/account/users/users.html',
        controller: 'UsersCtrl'
      });
  });