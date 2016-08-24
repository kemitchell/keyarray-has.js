keyarray-has.js
===============

[![NPM version](https://img.shields.io/npm/v/keyarray-has.svg)](https://www.npmjs.com/package/keyarray-has)
[![build status](https://img.shields.io/travis/kemitchell/keyarray-has.js.svg)](http://travis-ci.org/kemitchell/keyarray-has.js)

Recursive hasOwnProperty taking a key array.

```javascript
var has = require('keyarray-has')
var assert = require('assert')

assert.throws(function () {
  has({}, null)
}, TypeError)

assert.throws(function () {
  has(null, [0])
}, TypeError)

assert(has({a: 1}, ['a']) === true)

assert(has({a: 1}, ['b']) === false)

assert(has({a: {b: 1}}, ['a', 'b']) === true)

assert(has({a: {b: 1}}, ['a', 'c']) === false)

assert(has({a: ['string']}, ['a', 0]) === true)
```
