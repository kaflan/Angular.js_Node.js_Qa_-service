'use strict';

describe('Service: getTask', function () {

  // load the service's module
  beforeEach(module('myRepoApp'));

  // instantiate service
  var getTask;
  beforeEach(inject(function (_getTask_) {
    getTask = _getTask_;
  }));

  it('should do something', function () {
    expect(!!getTask).toBe(true);
  });

});
