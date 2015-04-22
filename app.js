var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.send("Hello, World!!");
})

app.get("/abc", function(req, res) {
    res.send("Hello, World!!");
})

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    host = "192.168.33.10";

    console.log("App start at http://%s:%s", host, port);
})

module.exports = app;