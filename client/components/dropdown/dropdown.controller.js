'use strict';

angular.module('evercodeApp')
  .controller('DropdownCtrl', function ($scope, $http, $location, socket, Auth) {
  
  //for dynamically generating buttons from db.notebooks. missing step is assigning link + button color on creation. 
    $scope.notebooks = [];
      $http.get('/api/notebooks').success(function(notebooks) {
        $scope.notebooks = notebooks;
      console.log("notebooks: ", notebooks);
        socket.syncUpdates('notebook', $scope.notebooks);
    });

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