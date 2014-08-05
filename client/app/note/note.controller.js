'use strict';

angular.module('evercodeApp')
  .controller('NoteCtrl', function ($scope, $http, socket, Auth) {
    $http.get('/api/notes/noteTest').success(function(message){
      $scope.message = message;

      $scope.notes = [];
      //get all notes
      $http.get('/api/notes').success(function(notes) {
        $scope.notes = notes;
        $scope.currentUser = Auth.getCurrentUser();
        socket.syncUpdates('note', $scope.notes);
        console.log("currentUser: ", $scope.currentUser);
      
      //get single note
      $scope.getSingleNote = function(note) {
      $http.get('/api/notes/' + note._id);
      }
      
      //delete single note
      $scope.deleteNote = function(note) {
      $http.delete('/api/notes/' + note._id);
    };

    //edit single note
    $scope.editNote = function(note) {
      note.tags.push(note.tempTag);
      delete note.tempTag;
      note.comments.push(note.tempComment);
      delete note.tempComment;
      $http.put('/api/notes/' + note._id, note).success(function() {
        console.log("note: ", note);
      });
    };

    $scope.voteUp = function(note) {
        note.rating++;
        note.active = !note.active;
      }

    $scope.voteDown = function(note) {
        note.rating>0?note.rating--:note.rating=note.rating;
        note.active = !note.active;
      }
    //search funcionality
    $scope.searchButtons =
      [
        {name: "alpha", orderBy: 'name', btn: "primary", glyph: "sort-by-alphabet"},
        {name: "likes", orderBy: '-rating', btn: "danger", glyph: "thumbs-up"},
        {name: "newest", orderBy: '-dateEdited', btn: "info", glyph: "calendar"},
        {name: "favorites", orderBy: '-favorite', btn: "warning", glyph: "star"}
      ];
    $scope.setOrder = function(order) {
      $scope.order = order;

    }
    // $scope.searchButtons.forEach(function (el){
    //     return el.orderBy;
    // })

    // $scope.myOrder = $scope.searchButtons.forEach(function (el){
    //     return el.orderBy;
    // })
      

    $scope.isFav = function(note) {
      return note.favorite?true:false; 
    };

    });
    })
  });

