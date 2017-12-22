'use strict'
const {promisify: p} = require('util')
const {execFile} = require('child_process')
const {describe, it} = require('mocha')
const {expect} = require('chai')

describe('example programs', function () {
  it('01-async', async () => {
    expect((await p(execFile)('node', ['src/01-async.js'])).stdout.trim()).to.equal('3.4906')
  })

  it('02-async-function', async () => {
    expect((await p(execFile)('node', ['src/02-async-function.js'])).stdout.trim()).to.equal('3.4906')
  })

  it('03-async-function-err', async () => {
    const result = await p(execFile)('node', ['src/03-async-function-err.js']).catch(err => err)

    expect(result.stderr).to.include('getaddrinfo ENOTFOUND api.fixer.io-error')
    expect(result.code).to.equal(1)
  })

  it('04-impatience', async () => {
    const result = await p(execFile)('node', ['src/04-impatience.js']).catch(err => err)

    expect(result.stderr).to.include('Error: failed request')
  })

  it('05-no-concurrency', async () => {
    expect((await p(execFile)('node', ['src/05-no-concurrency.js'])).stdout.trim()).to.equal('3.4906 0.84324')
  })

  it('06-concurrency', async () => {
    expect((await p(execFile)('node', ['src/06-concurrency.js'])).stdout.trim()).to.equal('3.4906 0.84324')
  })

  it('07-promise-array', async () => {
    expect((await p(execFile)('node', ['src/07-promise-array.js'])).stdout.trim()).to.equal('▁▁▁▂▂▇')
  })

  it('08-promise-all', async () => {
    expect((await p(execFile)('node', ['src/08-promise-all.js'])).stdout.trim()).to.equal('▁▁▁▂▂▇')
  })

  it('09-promise-all-short', async () => {
    expect((await p(execFile)('node', ['src/09-promise-all-short.js'])).stdout.trim()).to.equal('▁▁▁▂▂▇')
  })

  it('10-promise-all-shorter', async () => {
    expect((await p(execFile)('node', ['src/10-promise-all-shorter.js'])).stdout.trim()).to.equal('▁▁▁▂▂▇')
  })
})
