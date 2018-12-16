var contentful = require('contentful')
var config = require('../package.json').config || {}

var client = contentful.createClient({
  accessToken: '44f2b286e394198df930d60481ade424c2fead723f88767b154e1ce4ef560bcf',
  space: '8730t1z03k68'
})

exports.client = client
