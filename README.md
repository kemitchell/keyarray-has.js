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
