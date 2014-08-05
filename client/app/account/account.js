'use strict';

angular.module('evercodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('users.profile', {
        url: '/users/:id',
        templateUrl: 'app/account/users/users.profile.html',
        controller: 'UsersCtrl',
        authenticate: true,
        resolve: {
          user: function($stateParams, User) {
            return User.find($stateParams.id);
          }
        }
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });