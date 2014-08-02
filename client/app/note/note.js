'use strict';

angular.module('evercodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('note', {
          url: '/note',
          templateUrl: 'app/note/note.html',
          controller: 'NoteCtrl'
      })
      .state('note/:note._id', {
          url: '/note/:note._id',
          templateUrl: 'app/note/note/:note._id',
          controller: 'ShownoteCtrl'
      })
      ;
  });

