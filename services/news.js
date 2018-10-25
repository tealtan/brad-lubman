var client = require('./contentfulClient').client

function getNews (query) {
  query = query || {}
  query['content_type'] = 'news'
  query['order'] = 'fields.date'
  return client.getEntries(query)
}

module.exports = {
  getNews
}
