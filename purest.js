import promise from 'bluebird';
import request from '@request/client';
var purest = require('purest')({request, promise})

//Constants
import { FLICKR_CONSUMER_KEY, FLICKR_CONSUMER_SECRET } from './constants';

export const testLoginWithPurest = (connectionData) => {
  var flickr = purest({
    provider: 'flickr',
    config: require('@purest/providers'),
    key: FLICKR_CONSUMER_KEY,
    secret: FLICKR_CONSUMER_SECRET
  })

  flickr
    .get()
    .qs({
      method: 'flickr.test.login',
      api_key: FLICKR_CONSUMER_KEY
    })
    .auth(connectionData.access_token, connectionData.access_secret)
    .request()
    .then(([res, body]) => {
      console.log(body);
      return body;
    })
    .catch((err) => console.log(err))
}
