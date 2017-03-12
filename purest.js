var request = require('request')
var promise = require('bluebird')
var purest = require('purest')({request, promise})
var config = require('@purest/providers')

export const testLoginWithPurest = (connectionData) => {
  console.log('Inside testLoginWithPurest');

  var flickr = purest({provider: 'flickr', config,
    auth: {
      token: connectionData.oauth_token,
      secret: connectionData.oauth_token_secret
    }
  });

  flickr
    .get('flickr.test.login')
    .qs({api_key: connectionData.oauth_consumer_key})
    .auth(connectionData.access_token, connectionData.access_secret)
    .request(function (err, res, body) {
      console.log('err: ', err);
      console.log('res: ', res);
      console.log('body: ', body);
    })

  console.log('Outside testLoginWithPurest');
}
