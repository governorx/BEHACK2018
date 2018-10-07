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
function getUserAA(userEmail) {
  userEmail += ''
  var emailSplit = userEmail.split('@');
  var options = { method: 'GET',
    url: 'http://curl%20-X%20GET%20%22https:/behack2018hu.herokuapp.com/user',
    qs: { email: emailSplit[0] + '%40' + emailSplit[1] + '%22%20-H%20%22accept:%20application/json%22' },
    headers:
    { 'Postman-Token': 'acf9022d-8e97-480e-875a-725e9ce106be',
      'Cache-Control': 'no-cache' } };

      // request(options, function (error, response, body) {
      //   if (error) throw new Error(error);
      //
      //   console.log(body);
      // });
      console.log("running");
      console.log(userEmail);
      console.log("done");
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
  // var request = require("request");
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
function getReservationAA(recordL){
  // var request = require("request");

  var options = { method: 'GET',
    url: 'http://curl%20-X%20GET%20%22https:/behack2018hu.herokuapp.com/reservation',
    qs: { recordLocator: recordL + '%22%20-H%20%22accept:%20application/json%22' },
    headers:
    { 'Postman-Token': 'b8181599-634c-4e8c-9d55-3b6fd965190c',
      'Cache-Control': 'no-cache' } };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
      });
}


function getKillMe(){
  var endMe = {
  "firstName": "Coleman",
  "lastName": "Scott",
  "recordLocator": "ABCDEF",
  "flights": [
    {
      "flightNumber": "123",
      "originCode": "987",
      "originCity": "Pittsburgh",
      "destinationCode": "153",
      "destinationCity": "New York",
      "estimatedDeparture": "2:00",
      "scheduledDeparture": "2:00",
      "estimatedArrival": "12:00",
      "scheduledArrival": "3:00"
    }
  ]
};
  console.log("test")
  console.log(endMe);
  return endMe;
}

function createPostReservation(){
  var options = { method: 'POST',
    url: 'https://behack2018hu.herokuapp.com/reservation',
    qs: { userId: 'coleman', flightIds: 'ab%0A' },
    headers:
     { 'Postman-Token': 'c8c91dd2-537d-4cf2-aafd-da6d7007c5b5',
       'cache-control': 'no-cache',
       'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
    formData: { coleman: 'GJVRAZ' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}
