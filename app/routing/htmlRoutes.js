var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
})

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
})

router.get("/*.css", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/resources/css/style.css"));
})

router.get("/*.js", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/resources/javascript/app.js"));
})

// router.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "/../public/home.html"));
// })

module.exports = router;