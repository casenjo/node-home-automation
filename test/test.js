var assert = require("assert");

var bravia = require('../modules/bravia');

var config = require('../config');

describe('Sony Bravia TV', function() {
  describe('#turnOn()', function () {
    it('Should return true when the function is successfully called', function () {
      assert.equal(true, bravia.turnOn(config.tv.mac));
    });
  });
});