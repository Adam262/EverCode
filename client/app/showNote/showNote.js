'use strict';

angular.module('evercodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('showNote', {
        url: '/showNote',
        templateUrl: 'app/showNote/showNote.html',
        controller: 'ShownoteCtrl'
      });
  });