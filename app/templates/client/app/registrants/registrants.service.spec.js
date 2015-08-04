'use strict';

describe('Service: registrants', function () {

  // load the service's module
  beforeEach(module('sampleApp'));

  // instantiate service
  var registrants;
  beforeEach(inject(function (_registrants_) {
    registrants = _registrants_;
  }));

  it('should do something', function () {
    expect(!!registrants).toBe(true);
  });

});
