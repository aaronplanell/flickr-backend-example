import express from 'express';
import axios from 'axios';

//Constants
import { FLICK_API_URL, FLICK_API_KEY, FLICK_USER_ID, DEFAULT_FORMAT, DEFAULT_PARAMS } from './constants';

//Auxiliar functions
import { generateApiFlickCall } from './functions';

//The app
let app = express();

//Set the configuration
app.get('/photos', generateApiFlickCall('flickr.photos.search', {user_id: FLICK_USER_ID}));

//Do the listening
app.listen(3000, function () {
  console.log('Listening on port 3000!');
  console.log('Open http://localhost:3000/photos');
});
