import * as express from "express";
import * as _ from "lodash";
import { Player } from "../model/player"


export function players(app:express.Express) {
    var _players = [];
    /* Create */
    app.post('/player', function (req, res) {
        _players.push(req.body);
        res.json({info: 'player created successfully'});
        
    });

    /* Read */
    app.get('/player', function (req, res) {
        res.send(_players);
    });

    app.get('/player/:id', function (req, res) {
        res.send(
          _.find(
              _players,
              {
                  name: req.params.id
              }
          )  
        );
    });

    /* Update */
    app.put('/player/:id', function (req, res) {
        var index = _.findIndex(
            _players,{
                name: req.params.id
            }
        );
        _.merge(_players[index], req.body);
        res.json({info: 'player updated successfully!'})
    });

    /* Delete */
    app.delete('/player/:id', function (req, res) {
        _.remove(_players, (player) => {
           return player.name === req.params.id; 
        });
        res.json({info: 'player removed successfully'});
    });
};