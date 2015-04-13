/* jshint mocha: true */
var expect = require('chai').expect;
var has = require('..');

describe('keyarray-has', function() {
  it('throws TypeError for an invalid key array', function() {
    expect(
      function() {
        has({}, null);
      }
    ).to.throw(TypeError);
  });

  it('throws for an invalid object', function() {
    expect(
      function() {
        has(null, [0]);
      }
    ).to.throw(TypeError);
  });

  it('returns true when a property is present', function() {
    expect(
      has({a: 1}, ['a'])
    ).to.equal(true);
  });

  it('returns false when a property is not present', function() {
    expect(
      has({a: 1}, ['b'])
    ).to.equal(false);
  });

  it('returns true when a nested property is present', function() {
    expect(
      has({a: {b: 1}}, ['a', 'b'])
    ).to.equal(true);
  });

  it('returns false when a nested property is not present', function() {
    expect(
      has({a: {b: 1}}, ['a', 'c'])
    ).to.equal(false);
  });

  it('works with array indices', function() {
    expect(
      has({a: ['string']}, ['a', 0])
    ).to.equal(true);
  });
});
