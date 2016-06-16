import * as express from "express";
import * as bodyParser from "body-parser"
import { Config } from "./config/config"
import * as player from "./api/player";
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

player.players(app);

app.use('/', express.static(Config.current.root + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  

app.use(function (err:Error, res, next) {
    res.status(err.status || 500);
    res.render('error', {
    message: err.message,
    error: err,
    title: 'error'
    });
});

var server = app.listen(Config.current.port, function () {
    console.log('Server listening on port' + Config.current.port);
});

interface Error {
    name: string;
    message: string;
    status:number;
}

interface ErrorConstructor {
    new (message?: string): Error;
    (message?: string): Error;
    prototype: Error;
}

declare var Error: ErrorConstructor;