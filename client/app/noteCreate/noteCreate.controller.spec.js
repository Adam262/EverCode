'use strict';

describe('Controller: NotecreateCtrl', function () {

  // load the controller's module
  beforeEach(module('evercodeApp'));

  var NotecreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotecreateCtrl = $controller('NotecreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
