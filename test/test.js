var assert = require("assert");

var bravia = require('../modules/node-sonytv').SonyTV('host', '/sony/IRCC', '/sony/accessControl', 'CLIENT_ID', 'NICKNAME');;

var config = require('../config');

describe('Sony Bravia TV', function() {
  describe('#powerOn()', function () {
    it('Should return false when the function is called without a MAC address', function () {
      assert.equal(false, bravia.powerOn());
    });
  });
});