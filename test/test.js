'use strict'

const { expect } = require('chai')
const isValid = require('../index.js')
const f = v => () => isValid(v)

describe('#timelineValidator()', () => {
  describe('success', () => {
    it('true for an empty file', () => {
      const file = ''
      expect(isValid(file)).to.equal(true)
    })

    it('true for a file with only whitespace', () => {
      const file =
`

`
      expect(isValid(file)).to.equal(true)
    })

    it('true for a lone timepoint', () => {
      const file =
`0
`
      expect(isValid(file)).to.equal(true)
    })

    it('true for a timepoint with a one word datum', () => {
      const file =
`0 datum
`
      expect(isValid(file)).to.equal(true)
    })

    it('true for a timepoint with a multi word datum', () => {
      const file =
`0 datum datum datum
`
      expect(isValid(file)).to.equal(true)
    })

    it('true for a timepoint with a multi word datum and padding', () => {
      const file =
`  0 datum datum datum
`
      expect(isValid(file)).to.equal(true)
    })

    it('true for integer and float timepoints without datum', () => {
      const file =
`0
1
1.5
15
15.50
`
      expect(isValid(file)).to.equal(true)
    })

    it('true for integer and float timepoints with datum', () => {
      const file =
`0     datum
1     datum
1.5   datum
15    datum datum
15.50 datum datum
`
      expect(isValid(file)).to.equal(true)
    })

    it('true for integer and float timepoints with datum and padding', () => {
      const file =
`  0 datum
    1 datum
      1.5 datum
        15 datum datum
          15.50 datum datum
`
      expect(isValid(file)).to.equal(true)
    })
  })

  describe('errors', () => {
    it('throw an error when a timepoint is not a number', () => {
      const file =
`datum datum
`
      expect(f(file)).to.throw(
        'On line 1' + '\n' +
        'A timepoint must be number. Found: datum'
      )
    })

    it('throw an error when a timepoint is negative', () => {
      const file =
`0 datum
-10 datum
`
      expect(f(file)).to.throw(
        'On line 2' + '\n' +
        'A timepoint cannot be negative. Found: -10'
      )
    })

    it('throw an error when the first timepoint is not zero', () => {
      const file =
`10 datum
`
      expect(f(file)).to.throw(
        'On line 1' + '\n' +
        'The first timepoint must be zero. Found: 10'
      )
    })

    it('throw an error when the timepoints are not in chronological order', () => {
      const file =
`0 datum
20 datum
10 datum
`
      expect(f(file)).to.throw(
        'On line 3' + '\n' +
        'Timepoints must be in chronological order.' + '\n' +
        '10 cannot follow 20'
      )
    })
  })
})
/* -----------------------------------------------------------------------------
  Copyright (c) 2019-2020, Pierre-Emmanuel Lévesque
  License: MIT
----------------------------------------------------------------------------- */
