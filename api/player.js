"use strict";
var Player = require("./mongoose/player");
function players(app) {
    /* Create */
    app.post('/api/player', function (req, res) {
        var newPlayer = new Player(req.body);
        newPlayer.save(function (err) {
            if (err) {
                res.json({ info: 'error during player create', error: err });
            }
            res.json({ info: 'player saved successfully', data: newPlayer });
        });
    });
    /* Read */
    app.get('/api/player', function (req, res) {
        Player.find(function (err, players) {
            if (err) {
                res.json({ info: 'error during find players', error: err });
            }
            ;
            res.json({ info: 'players found successfully', data: players });
        });
    });
    app.get('/api/player/:name', function (req, res) {
        var query = { name: req.params.name };
        Player.findOne(query, function (err, player) {
            if (err) {
                res.json({ info: 'error during find player', error: err });
            }
            ;
            if (player) {
                res.json({ info: 'player found successfully', data: player });
            }
            else {
                res.json({ info: 'player not found with name:' + req.params.name });
            }
        });
    });
}
exports.players = players;
;
//# sourceMappingURL=player.js.map