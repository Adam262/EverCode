'use strict';

angular.module('evercodeApp')
  .controller('UsersCtrl', function ($scope, $http, Auth, User) {
      $scope.notes = [];
      $scope.userNotes = [];
      
      //get all notes
  $http.get('/api/notes').success(function(notes) {
      $scope.notes = notes;
          console.log("notes: ", notes);
      $scope.currentUser = Auth.getCurrentUser();
          console.log("UsersCtrl, currentUser", $scope.currentUser);
        notes.forEach(function(note){
            note.author.id==$scope.currentUser._id?$scope.userNotes.push(note):console.log("This author has no notes");
          });
      });
    //get all notebooks
      $scope.userNotebooks = [];
  $http.get('/api/notebooks').success(function(notebooks) {
   
      $scope.notebooks = notebooks;
          console.log("notebooks: ", notebooks);
        notebooks.forEach(function(notebook){
            notebook.author.id==$scope.currentUser._id?$scope.userNotebooks.push(notebook):console.log("This author has no notebooks");
          });
      });
  });
