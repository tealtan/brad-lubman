var express = require('express')
var router = express.Router()
var news = require('../services/news')
var events = require('../services/events')

router.use(function (req, res, next) {
  news.getNews().then(function (newsCollection) {
    req.news = newsCollection.items
    next()
  })
})

router.use(function (req, res, next) {
  events.getEvents().then(function (eventCollection) {
    req.events = eventCollection.items
    next()
  })
})

router.get('/', function (req, res, next) {
  res.render('sections', {
    'title': 'Home',
    'news': req.news,
    'events': req.events
  })
})

module.exports = router
