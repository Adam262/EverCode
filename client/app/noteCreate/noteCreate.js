'use strict';

angular.module('evercodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('noteCreate', {
        url: '/noteCreate',
        templateUrl: 'app/noteCreate/noteCreate.html',
        controller: 'NotecreateCtrl'
      });
  });