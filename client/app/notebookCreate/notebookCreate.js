'use strict';

angular.module('evercodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('notebookCreate', {
        url: '/notebookCreate',
        templateUrl: 'app/notebookCreate/notebookCreate.html',
        controller: 'NotebookcreateCtrl'
      });
  });