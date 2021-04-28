var oauth2 = require('simple-oauth2')({
  clientID: '',
  clientSecret: '',
  site: 'https://api.intra.42.fr',
  authorizationPath: 'https://api.intra.42.fr/oauth',
  tokenPath: 'https://api.intra.42.fr/oauth/token'
});
var tokenConfig = {};

exports.oauth2 = oauth2;
