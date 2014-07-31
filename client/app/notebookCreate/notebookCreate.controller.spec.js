'use strict';

describe('Controller: NotebookcreateCtrl', function () {

  // load the controller's module
  beforeEach(module('evercodeApp'));

  var NotebookcreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotebookcreateCtrl = $controller('NotebookcreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
