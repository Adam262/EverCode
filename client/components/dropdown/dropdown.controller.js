'use strict';

angular.module('evercodeApp')
    .controller('DropdownCtrl', function($scope, $rootScope, $http, $location, socket, Auth, noteBookFactory) {
        //get all notebooks
        $rootScope.$watch("notebooks", function(newval, oldval) {
            $scope.notebooks = newval;
            console.log("$scope.notebooks", $scope.notebooks)
        })
        $scope.getNotebooks = noteBookFactory.getNotebooks();

        //get single notebook
        $scope.getSingleNoteBook = function(notebookID) {
            $http.get('/api/notebooks/' + notebookID).success(function(notebook){
                 console.log("currentNotebook:", notebook);
                $scope.currentNotebook = notebook;
                return $scope.currentNotebook;
            });
        };

        //hack for populating ngOptions in noteCreate form      
        // var notebookNames = notebooks.map(function(notebook) {
        //     return notebook.name;
        // })

        // console.log("notebookNames: ", notebookNames);
        // socket.syncUpdates('notebook', $scope.notebooks);

        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function() {
            Auth.logout();
            $location.path('/');
        };

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });