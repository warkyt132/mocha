/* global describe, it */
var assert = require('assert')
var compare = require('./')

describe('is lower case compare ok', function () {
  it('should check if the strings are the same in lower case', function () {
    assert.equal(compare('test', 'TesT'), true)
    assert.equal(compare('TEST', 'test'), true)
    assert.equal(compare('Test', 'test '), false)
  })
})
