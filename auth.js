var oauth2 = require('simple-oauth2')({
  clientID: '8f4c258b48e4a7d4b5928ee4c715bd3e74f6aab2a01e0811e8d24fcb5b70614f',
  clientSecret: 'a32988c572880d41a074474b815589671ff1daa90aa8dd7618129b05fce0cba9',
  site: 'https://api.intra.42.fr',
  authorizationPath: 'https://api.intra.42.fr/oauth',
  tokenPath: 'https://api.intra.42.fr/oauth/token'
});
var tokenConfig = {};

exports.oauth2 = oauth2;
