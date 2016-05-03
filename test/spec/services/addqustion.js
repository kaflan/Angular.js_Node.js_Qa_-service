'use strict';

describe('Service: addQustion', function () {

  // load the service's module
  beforeEach(module('myRepoApp'));

  // instantiate service
  var addQustion;
  beforeEach(inject(function (_addQustion_) {
    addQustion = _addQustion_;
  }));

  it('should do something', function () {
    expect(!!addQustion).toBe(true);
  });

});
