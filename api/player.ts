import * as express from "express";
import * as _ from "lodash";
import { IPlayer } from "../public/app/model/IPlayer";
import * as Player from "./mongoose/player";
import { Config } from "../config/config";

export function players(app:express.Express) {

    /* Create */
    app.post('/api/player', function (req, res) {
        var newPlayer = new Player(req.body);
        newPlayer.save((err)=>{
            if (err){
                res.json({info: 'error during player create', error: err});
            }
            res.json({info: 'player saved successfully', data: newPlayer}); 
        });
    });

    app.get('/api/conf', function (req, res) {
       res.json(Config.env); 
    });

    /* Read */
    app.get('/api/player', function (req, res) {
        Player.find((err, players) => {
            if (err) {
                res.json({info: 'error during find players', error: err});
            };
            res.json({info: 'players found successfully', data: players});
        });
    });
    
    app.get('/api/player/:name', function (req, res) {
        var query = { name: req.params.name};
        Player.findOne(query, function(err, player) {
            if (err) {
                res.json({info: 'error during find player', error: err});
            };
            if (player) {
                res.json({info: 'player found successfully', data: player});
            } else {
                res.json({info: 'player not found with name:'+ req.params.name});
            }
        });
    });
};