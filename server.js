var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var api = require("./app/routing/apiRoutes.js");
var router = require("./app/routing/htmlRoutes.js");
app.use("/api/friends", api);
app.use("/", router);

app.use(express.static(path.join(__dirname, "/app/public/")));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });