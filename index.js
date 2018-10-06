//Following lines are imports, we'll ad more as we need them.
var express = require('express')
var path = require ('path')

//Below we define our application, express is the format of our HTML, it just makes things prettier
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

//App.get is how we tell it to respond to the URL request, so if you go to localhost:300/ it will open the file index.html
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + "/views/index.html")
  });
app.get("/3DAssets/bigbox.gltf", function(req, res, next){
    res.sendFile(__dirname + "/3DAssets/bigbox.gltf")
});
app.get("/3DAssets/bigbox.bin", function(req, res, next){
    res.sendFile(__dirname + "/3DAssets/bigbox.bin")
});
app.get('/testing', function (req, res, next) {
    res.sendFile(__dirname + "/views/ARScale.html")
  });


//App listen initates the server and prints the port.
app.listen(3000, function(){
    console.log("Server running at port 3000.." )
  });
  