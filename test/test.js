'use strict'
const {promisify: p} = require('util')
const {execFile} = require('child_process')
const {describe, it} = require('mocha')
const {expect} = require('chai')

describe('example programs', function () {
  it('01-async', async () => {
    expect((await p(execFile)('node', ['src/01-async.js'])).stdout.trim()).to.equal('3.4906')
  })

  it('01-async-function', async () => {
    expect((await p(execFile)('node', ['src/02-async-function.js'])).stdout.trim()).to.equal('3.4906')
  })
})
