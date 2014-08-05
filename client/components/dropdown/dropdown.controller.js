'use strict';

angular.module('evercodeApp')
    .controller('DropdownCtrl', function($scope, $http, $location, socket, Auth) {

        //for dynamically generating buttons from db.notebooks. missing step is assigning link + button color on creation. 
        $scope.notebooks = [];
        // $scope.notebooksArr = [];
        $http.get('/api/notebooks').success(function(notebooks) {
            $scope.notebooks = notebooks;

            

            //hack for populating ngOptions in noteCreate form      
            var notebookNames = notebooks.map(function(notebook) {
                return notebook.name;
            })

            console.log("notebookNames: ", notebookNames);
            socket.syncUpdates('notebook', $scope.notebooks);
        });


        
        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function() {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });