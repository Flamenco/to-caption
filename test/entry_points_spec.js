/*!
 * to-caption
 *
 * Copyright 2016-2026 Steven Spungin
 * Released under the MIT license
 */

import { expect } from 'chai'
import { createRequire } from 'node:module'
import toCaption from 'to-caption'

const require = createRequire(import.meta.url)

describe('entry points', () => {

  it('imports the ES module', () => {
    expect(toCaption('helloWorld')).to.equal('Hello World')
  })

  it('requires the CommonJS build as a function', () => {
    const required = require('to-caption')
    expect(required).to.be.a('function')
    expect(required('helloWorld')).to.equal('Hello World')
  })

  it('keeps the dist path requirable', () => {
    expect(require('to-caption/dist/toCaption.js')('helloWorld')).to.equal('Hello World')
  })

})
