var express = require("express");
var axios = require("axios");

var url = 'https://api.flickr.com/services/rest/';
var app = express();

app.get('/photos', function (req, res) {
  axios.get(url, {
    params: {
      method: 'flickr.photos.search',
      api_key: 'f98e7df44e1bca9174cba30db812cd3a',
      user_id: '148575064@N08',
      format: 'json'
    }
  })
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.send(error);
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
  console.log('Access to: http://localhost:3000/photos');
});
