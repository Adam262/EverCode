'use strict';

angular.module('evercodeApp')
    .controller('UsersCtrl', function($scope, $http, Auth, User, noteFactory, $rootScope) {
        $scope.userNotes = [];
     

        // get current user
        $scope.currentUser = Auth.getCurrentUser();
        console.log("UsersCtrl, currentUser", $scope.currentUser);

        //get all notes
        $scope.getNotes = noteFactory.getNotes();
        $rootScope.$watch("notes", function(newval, oldval) {
            $scope.notes = newval;
            console.log("newval", newval, "$scope.notes", $scope.notes)
      
        // get current user's notes
        $scope.notes.forEach(function(note) {
          console.log(" $scope.notes: ", $scope.notes)
            note.author.id == $scope.currentUser._id ? $scope.userNotes.push(note) : console.log("This author has no notes");
          });
        });
       
       

       
   
//get all notebooks
$scope.userNotebooks = [];
$http.get('/api/notebooks').success(function(notebooks) {

$scope.notebooks = notebooks;
console.log("notebooks: ", notebooks);
notebooks.forEach(function(notebook) {
    notebook.author.id == $scope.currentUser._id ? $scope.userNotebooks.push(notebook) : console.log("This author has no notebooks");
    });
  });
});
