$'use strict';

angular.module('evercodeApp')
  .factory('noteFactory', function ($http, socket, Auth, $rootScope) {

    var factory = {};

    factory.getNotes = function() {
      $rootScope.notes = [];
      $http.get('/api/notes').success(function(notes) {
        $rootScope.notes = notes;
        socket.syncUpdates('note', $rootScope.notes);
        // console.log("notes:", notes);
        return $rootScope.notes;
    })
  };
      // console.log("factory:", factory);
    return factory;
  });
