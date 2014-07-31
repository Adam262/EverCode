'use strict';

angular.module('evercodeApp')
  .controller('DropdownCtrl', function ($scope, $location, Auth) {
    $scope.dropdownArray = [
    {
      'title': 'Javascript',
      'sublinks': ["Angular", "JQuery", "Language"],
      'btn' : 'primary',
      'link': '/javascript'
    },
        {
          'title': 'HTML/CSS',
           'sublinks': ["HTML5", "CSS3", "Bootstrap", "LESS"],
           'btn' : 'danger',
           'link': '/html_css'
        },
            {
              'title': 'Backend',
              'sublinks': ["Node", "Express", "Rails"],
               'btn' : 'info',
               'link': '/backend'
             },
                  {
                    'title': 'Command Line',
                     'sublinks': ["Bash", "ZSH", "Git"],
                     'btn' : 'success',
                     'link': '/cli'
                   },
                       {
                    'title': 'Databases',
                     'sublinks': ["SQL", "NOSQL", "Firebase"],
                     'btn' : 'warning',
                     'link': '/db'
                   }

    ];
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