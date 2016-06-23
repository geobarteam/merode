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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtL3RlYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsd0NBQXNDLDJCQUEyQixDQUFDLENBQUE7QUFDbEUsNkJBQTRCLDBCQUM1QixDQUFDLENBRHFEO0FBRXRELGtDQUF1Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBU3BEO0lBR0ksdUJBQ1UsTUFBYyxFQUNkLFdBQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVVsQyxVQUFLLEdBQUcsaUJBQWlCLENBQUM7SUFSMUIsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDdkMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFNRCxnQ0FBUSxHQUFSLFVBQVMsTUFBYztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLE1BQWU7UUFDdEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNMLHFDQUFhLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFsQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsQyxVQUFVLEVBQUUsQ0FBQywrQ0FBcUIsQ0FBQztTQUN0QyxDQUFDOztxQkFBQTtJQThCRixvQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlkscUJBQWEsZ0JBNkJ6QixDQUFBIiwiZmlsZSI6ImFwcC90ZWFtL3RlYW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElQbGF5ZXIgfSBmcm9tICcuLi9tb2RlbC9JUGxheWVyJztcbmltcG9ydCB7IFBsYXllckRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vcGxheWVyLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVhbVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90ZWFtLnNlcnZpY2UnXG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXRlYW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RlYW0vdGVhbS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hcHAvdGVhbS90ZWFtLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtQbGF5ZXJEZXRhaWxDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRlYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyBcbiAgICBcbiAgICB0ZWFtOklQbGF5ZXJbXTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICBwcml2YXRlIHRlYW1TZXJ2aWNlOiBUZWFtU2VydmljZSl7XG4gICAgICBcbiAgICB9XG4gICAgbmdPbkluaXQoKXtcbiAgICAgIHRoaXMudGVhbVNlcnZpY2UuZ2V0UGxheWVycyhcImR1bW15XCIpLnRoZW4oXG4gICAgICAgIHBsYXllcnMgPT4gdGhpcy50ZWFtID0gcGxheWVycyk7XG4gICAgfVxuICAgIFxuICAgIHNlbGVjdGVkUGxheWVyOiBJUGxheWVyO1xuICAgIFxuICAgIHRpdGxlID0gJ1RvdXIgb2YgcGxheWVycyc7XG4gICAgICAgIFxuICAgIG9uU2VsZWN0KHBsYXllcjpJUGxheWVyKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRQbGF5ZXIgPSBwbGF5ZXI7XG4gICAgfVxuICAgIFxuICAgIGdvdG9EZXRhaWwocGxheWVyOiBJUGxheWVyKSB7XG4gICAgICAgIGxldCBsaW5rID0gWydQbGF5ZXJEZXRhaWwnLCB7IG5hbWU6IHBsYXllci5uYW1lIH1dO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcbiAgICAgICAgfVxuICAgIGdvdG9BZGRQbGF5ZXIoKXtcbiAgICAgICAgbGV0IGxpbmsgPSBbJ0FkZFBsYXllciddO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
