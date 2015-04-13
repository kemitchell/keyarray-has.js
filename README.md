keyarray-has.js
===============

[![NPM version](https://img.shields.io/npm/v/keyarray-has.svg)](https://www.npmjs.com/package/keyarray-has)
[![build status](https://img.shields.io/travis/kemitchell/keyarray-has.js.svg)](http://travis-ci.org/kemitchell/keyarray-has.js)

Recursive hasOwnProperty taking a key array.

```javascript
var has = require('keyarray-has');

var object = {
  a: {
    b: 'value',
    c: ['value', 'value']
  }
};

has(object, ['a', 'b']);
// true

has(object, ['x']);
// false

has(object, ['a', 'c', 1]);
// true

has(object, ['a', 'c', 2]);
// false
```
