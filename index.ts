import * as express from "express";
import * as bodyParser from "body-parser"
var app = express();

app.use('/', express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


/// <reference path="./player.ts" />
import * as player from "./api/player";
player.players(app);


var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});