'use strict';

angular.module('evercodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('notebook', {
        url: '/notebook',
        templateUrl: 'app/notebook/notebook.html',
        controller: 'NotebookCtrl'
      });
  });