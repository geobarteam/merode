"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var app_config_1 = require("./app.config");
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/merode');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
if (global.process.env.NODE_ENV !== 'production') {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
}
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
/// <reference path="./player.ts" />
var player = require("./api/player");
player.players(app);
console.log('Port:' + app_config_1.AppConfig.Config.socketPort);
var server = app.listen(app_config_1.AppConfig.Config.socketPort, function () {
    console.log('Server running at http://127.0.0.1:' + app_config_1.AppConfig.Config.socketPort);
});
//# sourceMappingURL=index.js.map