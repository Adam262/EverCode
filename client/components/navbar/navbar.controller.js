'use strict';

angular.module('evercodeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
    {
      'title': 'note_ify',
      'subtitle': 'read, capture, share, rate', 
      'link': '/'
    }
    // , 
    //   {
    //   'title': 'test',
    //   'link': '/'
    // }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/l');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });