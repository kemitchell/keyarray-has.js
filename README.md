keyarray-has.js
===============

[![NPM version](https://img.shields.io/npm/v/keyarray-has.svg)](https://www.npmjs.com/package/keyarray-has)
[![build status](https://img.shields.io/travis/kemitchell/keyarray-has.js.svg)](http://travis-ci.org/kemitchell/keyarray-has.js)

Recursive hasOwnProperty taking a key array.

```javascript
var has = require('keyarray-has')

has({}, null) // throws TypeError

has(null, [0]) // throws TypeError

has({a: 1}, ['a']) // === true

has({a: 1}, ['b']) // === false

has({a: {b: 1}}, ['a', 'b']) // === true

has({a: {b: 1}}, ['a', 'c']) // === false

has({a: ['string']}, ['a', 0]) // === true
```
