'use strict';

describe('Controller: ShownoteCtrl', function () {

  // load the controller's module
  beforeEach(module('evercodeApp'));

  var ShownoteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShownoteCtrl = $controller('ShownoteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
