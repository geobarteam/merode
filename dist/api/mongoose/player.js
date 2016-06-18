"use strict";
var mongoose = require("mongoose");
var playerSchema = new mongoose.Schema({
    name: String
});
var Player = mongoose.model("Player", playerSchema);
module.exports = Player;
