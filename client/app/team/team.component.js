"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var player_detail_component_1 = require('./player-detail.component');
var team_service_1 = require('../services/team.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var TeamComponent = (function () {
    function TeamComponent(router, teamService) {
        this.router = router;
        this.teamService = teamService;
        this.title = 'Tour of players';
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getPlayers("dummy").then(function (players) { return _this.team = players; });
    };
    TeamComponent.prototype.onSelect = function (player) {
        this.selectedPlayer = player;
    };
    TeamComponent.prototype.gotoDetail = function (player) {
        var link = ['PlayerDetail', { name: player.name }];
        this.router.navigate(link);
    };
    TeamComponent.prototype.gotoAddPlayer = function () {
        var link = ['AddPlayer'];
        this.router.navigate(link);
    };
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'my-team',
            templateUrl: 'app/team/team.html',
            styleUrls: ['./app/team/team.css'],
            directives: [player_detail_component_1.PlayerDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, team_service_1.TeamService])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map