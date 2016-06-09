"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/merode');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
/// <reference path="./player.ts" />
var player = require("./api/player");
player.players(app);
var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});
//# sourceMappingURL=index.js.map