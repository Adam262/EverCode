'use strict';

angular.module('evercodeApp')
  .factory('noteBookFactory', function ($http, socket, Auth, $rootScope) {

    var factory = {};

    factory.getNotebooks = function() {
      $rootScope.notebooks = [];
      $http.get('/api/notebooks').success(function(notebooks) {
        $rootScope.notebooks = notebooks;
        socket.syncUpdates('notebook', $rootScope.notebooks);
        // console.log("notebooks:", notebooks);
        return $rootScope.notebooks;
    })
  };
      // console.log("factory:", factory);
    return factory;
  });
