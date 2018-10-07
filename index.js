//Following lines are imports, we'll ad more as we need them.
var express = require('express')
var path = require ('path')
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.cert', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
//Below we define our application, express is the format of our HTML, it just makes things prettier
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

//App.get is how we tell it to respond to the URL request, so if you go to localhost:300/ it will open the file index.html
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + "/views/index.html")
  });
app.get('/luggage', function(req,res,next){
    res.sendFile(__dirname + "/views/LuggageManager.html")
});
app.get('/measure', function (req, res, next) {
    res.sendFile(__dirname + "/views/ARScale.html")
});
app.get('/home', function (req, res, next) {
      res.sendFile(__dirname + "/views/Webpage/webpage.html")
});
app.get('/user', function (req, res, next) {
      res.sendFile(__dirname + "/views/usertest.html")
});
app.get('/airport', function(req, res, next){
        res.sendFile(__dirname + "/views/AirportTravel.html")
});

//Asset response
app.get("/assets/css/Header-Nightsky.css", function(req,res,next){
    res.sendFile(__dirname + "/views/Webpage/assets/css/Header-Nightsky.css")
});
app.get("/nightsky.jpg", function(req,res,next){
    res.sendFile(__dirname + "/Assets/sky.jpg")
});
app.get("/aa-logo.png", function(req,res,next){
    res.sendFile(__dirname + "/Assets/american-airlines-renv.png")
});
app.get("/bigbox.gltf", function(req, res, next){
    res.sendFile(__dirname + "/Assets/bigbox.gltf")
});
app.get("/bigbox.bin", function(req, res, next){
    res.sendFile(__dirname + "/Assets/bigbox.bin")
});
app.get("/AAData.js", function(req, res, next){
    res.sendFile(__dirname + "/AAData.js")
});


//App listen initates the server and prints the port.
app.listen(3000, function(){
    console.log("Server running at port 3000.." )
  });
