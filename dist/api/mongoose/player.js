"use strict";
var mongoose = require("mongoose");
var playerSchema = new mongoose.Schema({
    name: String
});
var Player = mongoose.model("Player", playerSchema);
module.exports = Player;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9tb25nb29zZS9wbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksUUFBUSxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBS3JDLElBQUksWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxJQUFJLEVBQUUsTUFBTTtDQUNmLENBQUMsQ0FBQztBQUVILElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQWUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBRWxFLGlCQUFTLE1BQU0sQ0FBQyIsImZpbGUiOiJhcGkvbW9uZ29vc2UvcGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQge0lQbGF5ZXJ9IGZyb20gXCIuLi8uLi9tb2RlbC9JUGxheWVyXCJcblxuaW50ZXJmYWNlIElQbGF5ZXJNb2RlbCBleHRlbmRzIElQbGF5ZXIsIG1vbmdvb3NlLkRvY3VtZW50IHt9XG5cbnZhciBwbGF5ZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBuYW1lOiBTdHJpbmdcbn0pO1xuXG52YXIgUGxheWVyID0gbW9uZ29vc2UubW9kZWw8SVBsYXllck1vZGVsPihcIlBsYXllclwiLCBwbGF5ZXJTY2hlbWEpO1xuXG5leHBvcnQgPSBQbGF5ZXI7XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
