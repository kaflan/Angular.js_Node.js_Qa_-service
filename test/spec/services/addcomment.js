'use strict';

describe('Service: addComment', function () {

  // load the service's module
  beforeEach(module('myRepoApp'));

  // instantiate service
  var addComment;
  beforeEach(inject(function (_addComment_) {
    addComment = _addComment_;
  }));

  it('should do something', function () {
    expect(!!addComment).toBe(true);
  });

});
