function getGeolocation(){

var request = require("request");

var options = { method: 'GET',
  url: 'https://www.googleapis.com/geolocation/v1/geolocate',
  qs: { key: 'AIzaSyC__enugyQRkIPBh2lSYg_sPcr5v3kkss4' },
  headers: 
   { 'Postman-Token': 'fcc2e3a1-cf9d-4d1f-ab7d-c3708f293cd7',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

}