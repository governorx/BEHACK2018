function getLyftType(){

    var request = require("request");

var options = { method: 'GET',
  url: 'https://api.lyft.com/v1/ridetypes',
  qs: { lat: '37.7763', lng: '-122.3918' },
  headers: 
   { 'Postman-Token': 'd75c3de5-7529-4938-ad1f-052050643d3b',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

}