'use strict'
/* global describe, it */

const assert = require('assert')

describe('Module Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Module'])
  })
})
