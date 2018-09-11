var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
// require("./app/data/friends.js");
// require("./app/routing/apiRoutes.js");
var router = require("./app/routing/htmlRoutes.js");
app.use("/", router);


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });