'use strict';

describe('Controller: QaCtrl', function () {

  // load the controller's module
  beforeEach(module('myRepoApp'));

  var QaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QaCtrl = $controller('QaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QaCtrl.awesomeThings.length).toBe(3);
  });
});
