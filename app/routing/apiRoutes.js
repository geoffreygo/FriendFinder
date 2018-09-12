var express = require("express");
var bodyParser = require("body-parser");
var api = express.Router();
var friends = require("../data/friends.js");

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.post("/", function(req, res) {
    console.log("in post", req.body);
    var newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    res.redirect("/");
})

api.get("/", function(req, res) {
    return res.json(friends);
})

module.exports = api;