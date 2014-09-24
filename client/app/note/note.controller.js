'use strict';

angular.module('evercodeApp')
  .controller('NoteCtrl', function ($scope, $http, $rootScope, socket, Auth, noteFactory, noteBookFactory) {
//Get all notes
$rootScope.$watch("notes", function (newval, oldval){
          $scope.notes = newval;
      }) 
      $scope.getNotes = noteFactory.getNotes();

//Get current user
  $scope.currentUser = Auth.getCurrentUser();
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
      if (typeof note.tempTag !="undefined") {note.tags.push(note.tempTag)};
      delete note.tempTag;
      console.log("note.comments: ", note.comments)
      var paramComment = note.tempComment;
        console.log("note.tempCommentbefore:", note.tempComment, "note.paramComment:", paramComment, "commentsArraybefore:", note.comments )
          note.tempComment = {
            name: paramComment,
            authorId: $scope.currentUser._id,
            authorName: $scope.currentUser.name
            // _id: $scope.currentUser._id + note.$$hashkey
          };
      if (typeof note.tempComment.name !="undefined") {note.comments.push(note.tempComment)};
      // note.comments.push(note.tempComment);
        console.log("note.tempCommentafter:", note.tempComment, "commentsArrayafter:", note.comments)
      delete note.tempComment;
     
      $http.put('/api/notes/' + note._id, note).success(function() {
        console.log("$http.put note: ", note);
      });
    };
    //Rating vote up / down
    $scope.voteUp = function(note) {
        note.rating++;
        //note.active = !note.active;
      }

    $scope.voteDown = function(note) {
        note.rating>0?note.rating--:note.rating=note.rating;
        //note.active = !note.active;
      }
    //search funcionality
    $scope.searchButtons =
      [
        {name: "alpha", orderBy: 'name', btn: "primary", glyph: "sort-by-alphabet"},
        {name: "likes", orderBy: '-rating', btn: "danger", glyph: "thumbs-up"},
        {name: "new", orderBy: '-dateEdited', btn: "info", glyph: "calendar"},
        {name: "fav", orderBy: '-favorite', btn: "warning", glyph: "star"}
      ];
    $scope.setOrder = function(order) {
      $scope.order = order;

    }
// get single notebook
  // $rootScope.$watch('notebook', function (newval, oldval){
  //         $scope.notebook = newval;
  //     }) 
  //     $scope.getSingleNotebook = noteBookFactory.getSingleNoteBook($scope.notebook);

  //     });

    });
  

