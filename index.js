var express = require('express');
var session = require('express-session');
var grant = require('grant-express');

//Constants
import { APPLICATION_PORT, FLICKR_CONSUMER_SECRET } from './constants';

//Configuration
import { config } from './config';

//Auxiliar functions
import { getAccessToken, generateApiFlickCall } from './functions';

//App Express
var app = express();
app.use(session({secret: FLICKR_CONSUMER_SECRET}));
app.use(new grant(config));

//Our session variable
let currentSession;

//The main page
app.get('/', function (req, res) {
  //If there are no session, must connect
  if (!currentSession) {
    res.redirect('/connect/flickr');
  }
  else {
    //OK. If we are here we are logged :D
    app.get('/methods', generateApiFlickCall('flickr.reflection.getMethods', {}));
    app.get('/photos', generateApiFlickCall('flickr.photos.search', {user_id: '148575064@N08'}));
    app.get('/collections', generateApiFlickCall('flickr.collections.getTree', {user_id: '148575064@N08'}));

    res.end(currentSession);
  }
})

//Callback. Once Flickr has send us the credentials, we redirect to the main page.
app.get('/callback', function (req, res) {
  const listOfSessions = req.sessionStore.sessions;
  const idFirstSession = Object.keys(listOfSessions)[0];
  currentSession = listOfSessions[idFirstSession];
  res.redirect('/');
})

//Listen and inform
app.listen(APPLICATION_PORT, function () {
  console.log('Express server listening on port ' + APPLICATION_PORT);
  console.log('First of all, you must validate the application opening: http://127.0.0.1:' + APPLICATION_PORT + '/');
})
