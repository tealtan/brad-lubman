const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: 'f96cbh6z', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-12-21', // update to today's date
  useCdn: false, // `false` if you want to ensure fresh data
})
