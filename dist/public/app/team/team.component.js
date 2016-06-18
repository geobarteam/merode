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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtL3RlYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsd0NBQXNDLDJCQUEyQixDQUFDLENBQUE7QUFDbEUsNkJBQTRCLDBCQUM1QixDQUFDLENBRHFEO0FBRXRELGtDQUF1Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBU3BEO0lBR0ksdUJBQ1UsTUFBYyxFQUNkLFdBQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVVsQyxVQUFLLEdBQUcsaUJBQWlCLENBQUM7SUFSMUIsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDdkMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFNRCxnQ0FBUSxHQUFSLFVBQVMsTUFBYztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLE1BQWU7UUFDdEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQTlCVDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLFVBQVUsRUFBRSxDQUFDLCtDQUFxQixDQUFDO1NBQ3RDLENBQUM7O3FCQUFBO0lBMEJGLG9CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSxxQkFBYSxnQkF5QnpCLENBQUEiLCJmaWxlIjoiYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVBsYXllciB9IGZyb20gJy4uL21vZGVsL0lQbGF5ZXInO1xuaW1wb3J0IHsgUGxheWVyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9wbGF5ZXItZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZWFtU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RlYW0uc2VydmljZSdcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktdGVhbScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvdGVhbS90ZWFtLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FwcC90ZWFtL3RlYW0uY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1BsYXllckRldGFpbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGVhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7IFxuICAgIFxuICAgIHRlYW06SVBsYXllcltdO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgIHByaXZhdGUgdGVhbVNlcnZpY2U6IFRlYW1TZXJ2aWNlKXtcbiAgICAgIFxuICAgIH1cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgdGhpcy50ZWFtU2VydmljZS5nZXRQbGF5ZXJzKFwiZHVtbXlcIikudGhlbihcbiAgICAgICAgcGxheWVycyA9PiB0aGlzLnRlYW0gPSBwbGF5ZXJzKTtcbiAgICB9XG4gICAgXG4gICAgc2VsZWN0ZWRQbGF5ZXI6IElQbGF5ZXI7XG4gICAgXG4gICAgdGl0bGUgPSAnVG91ciBvZiBwbGF5ZXJzJztcbiAgICAgICAgXG4gICAgb25TZWxlY3QocGxheWVyOklQbGF5ZXIpe1xuICAgICAgdGhpcy5zZWxlY3RlZFBsYXllciA9IHBsYXllcjtcbiAgICB9XG4gICAgXG4gICAgZ290b0RldGFpbChwbGF5ZXI6IElQbGF5ZXIpIHtcbiAgICAgICAgbGV0IGxpbmsgPSBbJ1BsYXllckRldGFpbCcsIHsgbmFtZTogcGxheWVyLm5hbWUgfV07XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xuICAgICAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
