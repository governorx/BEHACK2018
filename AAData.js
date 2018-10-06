/*
  Parameters:
    userEmail: the users email emailAddress
  Returns:
    gets a user and returns their credentials
    json:
    {
  "firstName": "string",
  "lastName": "string",
  "gender": "Male",
  "email": "string",
  "aadvantageId": "string",
  "id": "string"
}
*/
function getUserAA(userEmail){
  var request = require("request");
  var emailSplit = userEmail.split('@');
  var options = { method: 'GET',
    url: 'http://curl%20-X%20GET%20%22https:/behack2018hu.herokuapp.com/user',
    qs: { email: emailSplit[0] + '%40' + emailSplit[1] + '%22%20-H%20%22accept:%20application/json%22' },
    headers:
    { 'Postman-Token': 'acf9022d-8e97-480e-875a-725e9ce106be',
      'Cache-Control': 'no-cache' } };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
      });
}

/*
  Parameters:
    fname: First Name
    lname: Last Name
    emailAddress: emailAddress
    gender: users gender
*/
// This most likely is unneeded
function makeUserAA(fName, lName, emailAddress, gender){
  var request = require("request");
  var emailSplit = userEmail.split('@');

  var options = { method: 'GET',
    url: 'http://curl%20-X%20POST%20%22https:/behack2018hu.herokuapp.com/user',
    qs:
    { firstName: fName,
      lastName: lName,
      email: emailSplit[0] + '%40' + emailSplit[1],
      gender: gender + '%22%20-H%20%22accept:%20application/json%22' },
      headers:
      { 'Postman-Token': '81053f6a-3aba-4505-92c3-0bc6b07ac137',
      'Cache-Control': 'no-cache' } };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
      });
}

/*
  Parameters:
    recordLocater: The 6 letter address that refers to a flight

  Returns:
    returns json: {
  "firstName": "string",
  "lastName": "string",
  "recordLocator": "string",
  "flights": [
    {
      "flightNumber": "string",
      "originCode": "string",
      "originCity": "string",
      "destinationCode": "string",
      "destinationCity": "string",
      "estimatedDeparture": "string",
      "scheduledDeparture": "string",
      "estimatedArrival": "string",
      "scheduledArrival": "string"
    }
  ]
}
*/
function getReservationAA(recordLocater){
  var request = require("request");

  var options = { method: 'GET',
    url: 'http://curl%20-X%20GET%20%22https:/behack2018hu.herokuapp.com/reservation',
    qs: { recordLocator: recordLocater + '%22%20-H%20%22accept:%20application/json%22' },
    headers:
    { 'Postman-Token': 'b8181599-634c-4e8c-9d55-3b6fd965190c',
      'Cache-Control': 'no-cache' } };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
      });
}
