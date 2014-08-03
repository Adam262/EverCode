'use strict';

angular.module('evercodeApp')
    .controller('DropdownCtrl', function($scope, $http, $location, socket, Auth) {

        //for dynamically generating buttons from db.notebooks. missing step is assigning link + button color on creation. 
        $scope.notebooks = [];
        // $scope.notebooksArr = [];
        $http.get('/api/notebooks').success(function(notebooks) {
            $scope.notebooks = notebooks;

            // var colors = ["primary", "danger", "info", "success", "warning"];

            // function getRandom(arr) {
            //     var num = Math.floor(Math.random() * arr.length);
            //     return arr[num];
            // }

            // notebooks = notebooks.forEach(function(notebook){
            //     notebook.btn = getRandom(colors);
            //     notebook.link = "/" + notebook.name;
            // })

            //  $scope.notebooksArr = notebooks.map(function(notebook) {
            //     notebook.link = "/" + notebook.name;
            //     notebook.btn = getRandom(colors);
            //     console.log("name:", notebook.name, "link: ", notebook.link, "btn: ", notebook.btn);
            //   console.log("notebooksArr: ", $scope.notebooksArr)

            // })

            

            //hack for populating ngOptions in noteCreate form      
            var notebookNames = notebooks.map(function(notebook) {
                return notebook.name;
            })

            console.log("notebookNames: ", notebookNames);
            socket.syncUpdates('notebook', $scope.notebooks);
        });


        // $scope.dropdownArray = [{
        //         'title': 'Javascript',
        //         'sublinks': ["Angular", "JQuery", "Language"],
        //         'btn': 'primary',
        //         'link': '/javascript'
        //     }, {
        //         'title': 'HTML/CSS',
        //         'sublinks': ["HTML5", "CSS3", "Bootstrap", "LESS"],
        //         'btn': 'danger',
        //         'link': '/html_css'
        //     }, {
        //         'title': 'Backend',
        //         'sublinks': ["Node", "Express", "Rails"],
        //         'btn': 'info',
        //         'link': '/backend'
        //     }, {
        //         'title': 'Command Line',
        //         'sublinks': ["Bash", "ZSH", "Git"],
        //         'btn': 'success',
        //         'link': '/cli'
        //     }, {
        //         'title': 'Database',
        //         'sublinks': ["SQL", "NOSQL", "Firebase"],
        //         'btn': 'warning',
        //         'link': '/db'
        //     }

        // ];
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