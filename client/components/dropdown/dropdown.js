'use strict';

angular.module('evercodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dropdown', {
        url: '/dropdown',
        templateUrl: 'components/dropdown/dropdown.html',
        controller: 'DropdownCtrl'
      });
  });