'use strict'

function throwError (lineNum, message) {
  throw new Error(
    'On line ' + lineNum + '\n' +
    message
  )
}

module.exports = file => {
  if (file === '') return true
  let lastTimepoint
  const lines = file.split('\n')
  lines.forEach((line, i) => {
    line = line.trim()
    const lineNum = i + 1
    if (line !== '') {
      const tokens = line.split(' ')
      const timepoint = tokens.shift()
      if (isNaN(timepoint)) {
        throwError(
          lineNum,
          'A timepoint must be number. Found: ' + timepoint
        )
      }
      const newTimepoint = parseFloat(timepoint)
      if (newTimepoint < 0) {
        throwError(
          lineNum,
          'A timepoint cannot be negative. Found: ' + timepoint
        )
      }
      if (typeof lastTimepoint === 'undefined') {
        if (newTimepoint !== 0) {
          throwError(
            lineNum,
            'The first timepoint must be zero. Found: ' + timepoint
          )
        }
      } else if (newTimepoint <= lastTimepoint) {
        throwError(
          lineNum,
          'Timepoints must be in chronological order.' + '\n' +
          newTimepoint + ' cannot follow ' + lastTimepoint
        )
      }
      lastTimepoint = newTimepoint
    }
  })
  return true
}
/* -----------------------------------------------------------------------------
  Copyright (c) 2019-2020, Pierre-Emmanuel Lévesque
  License: MIT
----------------------------------------------------------------------------- */
