const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-192752.oktapreview.com',
  token: '00yekoRaBTSZ_9NBJBvdnc5WZnvIFzsPtX9OpBFh7Q'
});

module.exports = client;