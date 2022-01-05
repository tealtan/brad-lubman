const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: 'f96cbh6z', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-12-21', // update to today's date
  token: 'skUKY9SBZTe3kaypeHiC2Pz2tDN7o59Luwt9MHa7pVnQsoUviJngvE8oEc0Gak4Ciwc2Y65SPjPmaZDYl2plNFU7gAKCeTZ3Tnc3ieuqgq0M4S1Pj3iWvBcmXrBW4SgbUioEqarPyVLCQsEzfq4tsRP8zW3QLvc14Y1565P7MO2Qkbmfcy0p',
  useCdn: false, // `false` if you want to ensure fresh data
})
