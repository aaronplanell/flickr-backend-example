import express from 'express';
import session from 'express-session';
import grant from 'grant-express';

//Constants
import { APPLICATION_PORT, FLICKR_CONSUMER_SECRET } from './constants';

//Configuration
import { config } from './config';

//Auxiliar functions
import { getConnectionData, doLogin, getMethods, doCall } from './functions';

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
    const connectionData = getConnectionData(req);
    if (connectionData) {

      //doLogin. It calls to the testLogin method.
      doLogin(connectionData).then( (resultOfLogin) => {
        const { stat } = resultOfLogin;
        if (stat === 'ok') {

          //Get methods. It obtains the list of methods of the API
          getMethods(connectionData).then( (listOfMethods) => {
            if (listOfMethods && listOfMethods.methods && listOfMethods.methods.method) {

              /*
               * Map every method to a app.get. This is the core of the application.
               * This part is a proxy for every method of the Flickr API
               ***/
              listOfMethods.methods.method.map( (method) => {
                const { _content } = method;
                app.get('/' + _content, doCall(connectionData, _content));
              });
            }
          });

          res.end('Well... You\'re connected. You can work with the API :D');
        } else {
          res.end('Ooops! Something wrong has happened :/');
        }
      });

    } else {
      res.end('Ooops! Something wrong has happened :/');
    }
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
