var express = require('express')
var router = express.Router()
// var events = require('../services/events')

router.use(function (req, res, next) {
  events.getEvents().then(function (eventCollection) {
    req.events = eventCollection.items
    next()
  })
})

router.get('/', function (req, res, next) {
  res.render('events', {
    'title': 'Events',
    'events': req.events
  })
})

module.exports = router
