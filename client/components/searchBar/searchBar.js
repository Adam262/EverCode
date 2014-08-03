'use strict';

angular.module('evercodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('searchBar', {
        url: '/searchBar',
        templateUrl: 'components/searchBar/searchBar.html',
        controller: 'SearchbarCtrl'
      });
  });