import * as express from "express";
import * as bodyParser from "body-parser"
import { Config } from "./config/config"
var app = express();

var mongoose = require('mongoose');
mongoose.connect(Config.current.mongoConnectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

if (Config.env == 'development'){
    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
};

app.use('/', express.static(Config.current.root + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


/// <reference path="./player.ts" />
import * as player from "./api/player";
player.players(app);


var server = app.listen(Config.current.port, function () {
    console.log('Server listening on port' + Config.current.port);
});