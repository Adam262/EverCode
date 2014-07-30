'use strict';

describe('Controller: DropdownCtrl', function () {

  // load the controller's module
  beforeEach(module('evercodeApp'));

  var DropdownCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DropdownCtrl = $controller('DropdownCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
