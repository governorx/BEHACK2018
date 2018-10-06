//Getting Request estimates form UBER
//DEPRECATED
function getUberEstimates(){
  var request = require("request");

  var options = { method: 'GET',
    url: 'https://api.uber.com/v1.2/requests/estimate',
    headers:
    { 'Postman-Token': '0a7e4d1f-c489-40f9-8238-33bec8f07bab',
      'Cache-Control': 'no-cache' } };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
      });
      return body;
}

//Getting the estimated price of an uber request
/*
  Parameters:
    start_lat: The starting latitude of a request.
    start_lon: The Starting Longitude of a request.
    end_lat: The ending latitude of a request.
    end_lon: The ending Longitude of a request.

  Returns:
    Hopefully a large body of text with each request type maybe json
*/
function getUberEstimatesPrice(start_lat, start_lon, end_lat, end_lon){
  var request = require("request");

  var options = { method: 'GET',
    url: 'http://%27https:/api.uber.com/v1.2/estimates/price',
    qs:
    { start_latitude: start_lat,
      start_longitude: start_lon,
      end_latitude: end_lat,
      end_longitude: end_lon },
      headers:
      { 'Postman-Token': '8321b65a-454d-451c-8c84-8e0ca2648327',
      'Cache-Control': 'no-cache' } };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
      });
  return body;
}

//Getting the estimate time of an uber requests
/*
  Parameters:
    start_lat: The starting latitude of a request.
    start_lon: The Starting Longitude of a request.

  Returns:
    Hopefully a large body of text with each request type maybe json
*/
function getUberEstimatesTime(start_lat, start_lon){
  var request = require("request");

  var options = { method: 'GET',
    url: 'http://%27https:/api.uber.com/v1.2/estimates/time',
    qs:
    { start_latitude: '37.7752315',
      start_longitude: '-122.418075%27' },
      headers:
      { 'Postman-Token': 'ebae44cd-e3a7-449f-a32a-3dcdd5425678',
      'Cache-Control': 'no-cache' } };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
      });
      return body;
}
