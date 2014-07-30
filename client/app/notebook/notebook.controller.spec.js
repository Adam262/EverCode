'use strict';

describe('Controller: NotebookCtrl', function () {

  // load the controller's module
  beforeEach(module('evercodeApp'));

  var NotebookCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotebookCtrl = $controller('NotebookCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
