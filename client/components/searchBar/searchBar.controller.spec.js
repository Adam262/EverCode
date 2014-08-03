'use strict';

describe('Controller: SearchbarCtrl', function () {

  // load the controller's module
  beforeEach(module('evercodeApp'));

  var SearchbarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchbarCtrl = $controller('SearchbarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
