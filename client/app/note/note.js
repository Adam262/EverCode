'use strict';

angular.module('evercodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('note', {
        url: '/note',
        templateUrl: 'app/note/note.html',
        controller: 'NoteCtrl'
      })
      // .state('note:note._id', {
      //   templateUrl: function(params){ return '/showNote/' + params.user_id;},
      //   controller: 'ShownoteCtrl'
      // })
      ;
  });

