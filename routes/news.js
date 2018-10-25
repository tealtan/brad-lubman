var express = require('express')
var router = express.Router()
// var products = require('../services/news')

router.use(function (req, res, next) {
  products.getNews().then(function (sectionCollection) {
    req.news = sectionCollection.items
    next()
  })
})

router.get('/', function (req, res, next) {
  res.render('news', {
    'title': 'News',
    'news': req.news
  })
})

module.exports = router
