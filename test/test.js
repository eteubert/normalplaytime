var assert = require("assert");
var NormalPlayTime = require('../index.js');


describe('NormalPlayTime', function() {
  describe('#parse()', function() {
    
    it('should return null for invalid strings', function() {
      assert.equal(null, NormalPlayTime.parse("abc"));
    });

    it('should return 1000 for "1"', function() {
      assert.equal(1000, NormalPlayTime.parse("1"));
    });

    it('should return 1234 for "1.234"', function() {
      assert.equal(1234, NormalPlayTime.parse("1.234"));
    });

    it('should return 754000 for "12:34"', function() {
      assert.equal(754000, NormalPlayTime.parse("12:34"));
    });

    it('should return 754560 for "12:34.56"', function() {
      assert.equal(754560, NormalPlayTime.parse("12:34.56"));
    });

    it('should return 62000 for "1:2"', function() {
      assert.equal(62000, NormalPlayTime.parse("1:2"));
    });

    it('should return 3723400 for "1:2:3.4"', function() {
      assert.equal(3723400, NormalPlayTime.parse("1:2:3.4"));
    });

    it('should return 0 for 0 milliseconds', function() {
      assert.equal(0, NormalPlayTime.parse("00:00:00.000"));
    });

  });
});
