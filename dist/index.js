
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./forcecode-hooks.cjs.production.min.js')
} else {
  module.exports = require('./forcecode-hooks.cjs.development.js')
}
