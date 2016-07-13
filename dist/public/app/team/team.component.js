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
var player_detail_component_1 = require('./detail/player-detail.component');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtL3RlYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsd0NBQXNDLGtDQUFrQyxDQUFDLENBQUE7QUFDekUsNkJBQTRCLDBCQUM1QixDQUFDLENBRHFEO0FBRXRELGtDQUF1Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBUXBEO0lBR0ksdUJBQ1UsTUFBYyxFQUNkLFdBQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVVsQyxVQUFLLEdBQUcsaUJBQWlCLENBQUM7SUFSMUIsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDdkMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFNRCxnQ0FBUSxHQUFSLFVBQVMsTUFBYTtRQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLE1BQWE7UUFDcEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNMLHFDQUFhLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFsQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsQyxVQUFVLEVBQUUsQ0FBQywrQ0FBcUIsQ0FBQztTQUN0QyxDQUFDOztxQkFBQTtJQThCRixvQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlkscUJBQWEsZ0JBNkJ6QixDQUFBIiwiZmlsZSI6ImFwcC90ZWFtL3RlYW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL21vZGVsL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0IHsgUGxheWVyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWwvcGxheWVyLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVhbVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90ZWFtLnNlcnZpY2UnXG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS10ZWFtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC90ZWFtL3RlYW0uaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBwL3RlYW0vdGVhbS5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbUGxheWVyRGV0YWlsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUZWFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgXG4gICAgXG4gICAgdGVhbTpQbGF5ZXJbXTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICBwcml2YXRlIHRlYW1TZXJ2aWNlOiBUZWFtU2VydmljZSl7XG4gICAgICBcbiAgICB9XG4gICAgbmdPbkluaXQoKXtcbiAgICAgIHRoaXMudGVhbVNlcnZpY2UuZ2V0UGxheWVycyhcImR1bW15XCIpLnRoZW4oXG4gICAgICAgIHBsYXllcnMgPT4gdGhpcy50ZWFtID0gcGxheWVycyk7XG4gICAgfVxuICAgIFxuICAgIHNlbGVjdGVkUGxheWVyOiBQbGF5ZXI7XG4gICAgXG4gICAgdGl0bGUgPSAnVG91ciBvZiBwbGF5ZXJzJztcbiAgICAgICAgXG4gICAgb25TZWxlY3QocGxheWVyOlBsYXllcil7XG4gICAgICB0aGlzLnNlbGVjdGVkUGxheWVyID0gcGxheWVyO1xuICAgIH1cbiAgICBcbiAgICBnb3RvRGV0YWlsKHBsYXllcjpQbGF5ZXIpIHtcbiAgICAgICAgbGV0IGxpbmsgPSBbJ1BsYXllckRldGFpbCcsIHsgbmFtZTogcGxheWVyLm5hbWUgfV07XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xuICAgICAgICB9XG4gICAgZ290b0FkZFBsYXllcigpe1xuICAgICAgICBsZXQgbGluayA9IFsnQWRkUGxheWVyJ107XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
