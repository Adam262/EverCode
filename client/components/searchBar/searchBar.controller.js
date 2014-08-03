'use strict';

angular.module('evercodeApp')
  .controller('SearchbarCtrl', function ($scope) {
    
    $scope.searchButtons =
      [
        {name: "alpha", orderBy: "name", glyph: "sort-by-alphabet"},
        {name: "likes", orderBy: "rating", glyph: "thumbs-up"},
        {name: "newest", orderBy: "dateAdded", glyph: "calendar"},
        {name: "favorites", orderBy: "name", glyph: "star"}
      ];

    $scope.isFav = function(note) {
      return note.favorite?true:false; 
    }

    //  ie <ul ng-repeat = "thing in things" | filter: isFav| orderby:'name'>

  });
