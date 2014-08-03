'use strict';

describe('Service: searchBar', function () {

  // load the service's module
  beforeEach(module('evercodeApp'));

  // instantiate service
  var searchBar;
  beforeEach(inject(function (_searchBar_) {
    searchBar = _searchBar_;
  }));

  it('should do something', function () {
    expect(!!searchBar).toBe(true);
  });

});
