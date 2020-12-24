[build-status]:    https://travis-ci.org/orfeolang/timeline-validator.svg?branch=master
[build]:           https://travis-ci.org/orfeolang/timeline-validator
[coverage-status]: https://coveralls.io/repos/github/orfeolang/timeline-validator/badge.svg?branch=master
[coverage]:        https://coveralls.io/github/orfeolang/timeline-validator?branch=master
[standard-badge]:  https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard]:        https://standardjs.com
[mit-badge]:       https://img.shields.io/badge/License-MIT-yellow.svg
[mit]:             http://opensource.org/licenses/MIT

[![][build-status]][build]
[![][coverage-status]][coverage]
[![][standard-badge]][standard]
[![][mit-badge]][mit]

# Timeline-validator

A validator for the Timeline file format.

http://orfeo.org

## Node Repository

https://www.npmjs.com/package/@orfeo/timeline-validator

## Installation

`npm install @orfeo/timeline-validator`

## Usage

```js
const isValid = require('@orfeo/timeline-validator')
const file = // Load the Timeline file.

// Without error reporting.
if (isValid(file)) {
  // Do stuff here if valid.
}

// With error reporting.
try {
  isValid(file)
} catch (e) {
  console.error(e)
  process.exit(1)
}
// Do stuff here if valid.
```

## Tests

Command                        | Description
------------------------------ | -----------------------------------------
`npm test` or `npm run test`   | unit tests + coverage + standardx linting
`npm run cover`                | unit tests + coverage
`npm run standardx`            | standardx linting
`npm run units_with_standardx` | unit tests + standardx linting
`npm run units`                | unit tests

## Copyright

Copyright (c) 2019-2020, <a href="https://github.com/pelevesque">Pierre-Emmanuel Lévesque</a>

## License

MIT

<div align="center">
  <sub>Built with ❤︎ by <a href="https://github.com/pelevesque">Pierre-Emmanuel Lévesque</a>
</div>
