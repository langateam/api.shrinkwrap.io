'use strict'
/* global describe, it */

const assert = require('assert')

describe('GithubService', () => {
  it('should exist', () => {
    assert(global.app.api.services['GithubService'])
  })
})
