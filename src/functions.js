import promise from 'bluebird';
import axios from 'axios';
import request from '@request/client';

const purest = require('purest')({request, promise})

//Constants
import { FLICKR_API_URL, DEFAULT_PARAMS, FLICKR_CONSUMER_KEY, FLICKR_CONSUMER_SECRET } from './constants';

/*
 * Call to Flickr without authentication
 ***/
export const doCallWithoutAuthentication = (method, params) => {
  return (req, res) => {
    axios.get(FLICKR_API_URL, {
      params: {
        ...DEFAULT_PARAMS,
        method,
        ...params
      }
    })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });
  }
};

/*
 * Construct an object with all the data of the connection
 ***/
export const getConnectionData = (req) => {
  if (req && req.session && req.session.grant && req.session.grant.step1 && req.session.grant.response) {
    const oauth_consumer_key = FLICKR_CONSUMER_KEY;
    const { oauth_token, oauth_token_secret } = req.session.grant.step1;
    const { access_token, access_secret, raw } = req.session.grant.response;
    const { user_nsid, username, fullname } = raw;
    const connectionData = { user_nsid, username, fullname, oauth_consumer_key, oauth_token, oauth_token_secret, access_token, access_secret };
    showConnectionData(connectionData);
    return connectionData;
  } else {
    return null;
  }
}

/*
 * Show data for debugging purposes
 * Receives and object with this structure: user_nsid, username, fullname, oauth_token, oauth_token_secret, access_token, access_secret
 ***/
const showConnectionData = (connectionData) => {
  const { user_nsid, username, fullname, oauth_consumer_key, oauth_token, oauth_token_secret, access_token, access_secret } = connectionData;
  console.log('--------------------- Connection Data ---------------------');
  console.log(' - user_nsid____________: ', user_nsid);
  console.log(' - username_____________: ', username);
  console.log(' - fullname_____________: ', fullname);
  console.log(' - oauth_consumer_key___: ', oauth_consumer_key);
  console.log(' - oauth_token__________: ', oauth_token);
  console.log(' - oauth_token_secret___: ', oauth_token_secret);
  console.log(' - access_token_________: ', access_token);
  console.log(' - access_secret________: ', access_secret);
  console.log('-----------------------------------------------------------');
}

/*
 * Test login
 ***/
export const testLogin = async (connectionData) => {
  var flickr = purest({
    provider: 'flickr',
    config: require('@purest/providers'),
    key: FLICKR_CONSUMER_KEY,
    secret: FLICKR_CONSUMER_SECRET
  })

  return await flickr
    .get()
    .qs({
      method: 'flickr.test.login',
      api_key: FLICKR_CONSUMER_KEY
    })
    .auth(connectionData.access_token, connectionData.access_secret)
    .request()
    .then(([res, body]) => {
      return body;
    })
    .catch((err) => {
      console.log(err);
      return err;
    })
}
