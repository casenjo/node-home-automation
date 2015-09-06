var assert = require("assert");

var bravia = require('../bravia');

describe('Sony Bravia TV', function() {
  describe('#turnOn()', function () {
    it('Should return "On" when the function is called', function () {
      assert.equal("On", bravia.turnOn());
    });
  });
});