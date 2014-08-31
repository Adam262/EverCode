'use strict';

angular.module('evercodeApp')
  .factory('noteBookFactory', function ($http, socket, Auth, $rootScope) {

    var factory = {};
//get all notebooks:
    factory.getNotebooks = function() {
      $rootScope.notebooks = [];
      $http.get('/api/notebooks').success(function(notebooks) {
        $rootScope.notebooks = notebooks;
        socket.syncUpdates('notebook', $rootScope.notebooks);
        // console.log("notebooks:", notebooks);
        return $rootScope.notebooks;
    })
  };

// //get single notebook
    factory.getSingleNoteBook = function(notebook) {
      $http.get('/api/notebooks/' + notebook._id).success(function(notebook){
          $rootScope.notebook = notebook;
          return $rootScope.notebook;
        });
      };
      // console.log("factory:", factory);
     return factory;
  });
