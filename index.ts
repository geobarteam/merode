import * as express from "express";
import * as bodyParser from "body-parser";
import { AppConfig } from "./app.config";

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/merode');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

if (global.process.env.NODE_ENV !== 'production'){
    app.use(function(req, res, next) {
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
import * as player from "./api/player";
player.players(app);

console.log('Port:'+AppConfig.Config.socketPort);
var server = app.listen(AppConfig.Config.socketPort, function () {
    console.log('Server running at http://127.0.0.1:' + AppConfig.Config.socketPort);
});