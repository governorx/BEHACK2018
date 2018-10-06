function getGoogleDestInfo(){

    var request = require("request");

var options = { method: 'GET',
  url: 'https://maps.googleapis.com/maps/api/distancematrix/xml',
  qs: 
   { origins: 'Vancouver+BC|Seattle',
     destinations: 'San+Francisco|Vancouver+BC',
     mode: 'bicycling',
     key: 'AIzaSyC__enugyQRkIPBh2lSYg_sPcr5v3kkss4' },
  headers: 
   { 'Postman-Token': '96773484-b422-4fb5-a7f1-7530da5e16f5',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

}