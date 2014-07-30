'use strict';

angular.module('evercodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('note', {
        url: '/note',
        templateUrl: 'app/note/note.html',
        controller: 'NoteCtrl'
      });
  });