'use strict';

angular.module('evercodeApp')
    .controller('DropdownCtrl', function($scope, $rootScope, $http, $location, socket, Auth, noteBookFactory) {
        //get all notebooks
        $rootScope.$watch("notebooks", function(newval, oldval) {
            $scope.notebooks = newval;
        })
        $scope.getNotebooks = noteBookFactory.getNotebooks();


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