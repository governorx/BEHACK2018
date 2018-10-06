
function getLyftEstimates(){
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.lyft.com/v1/cost',
  qs: 
   { start_lat: '37.7763',
     start_lng: '-122.3918',
     end_lat: '37.7972',
     end_lng: '-122.4533',
     ride_type: 'lyft' },
  headers: 
   { 'Postman-Token': '4a934db9-470d-4035-b2cb-839f3c15791f',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
}
