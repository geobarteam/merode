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
var team_service_1 = require('../services/team.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var DashboardComponent = (function () {
    function DashboardComponent(router, teamService) {
        this.router = router;
        this.teamService = teamService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getPlayers("dummy").then(function (players) {
            _this.players = players.slice(1, 5);
        });
    };
    DashboardComponent.prototype.gotoDetail = function (player) {
        var link = ['PlayerDetail', { name: player.name }];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            styleUrls: ['./app/dashboard/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, team_service_1.TeamService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELDZCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZELGtDQUF1Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBUXBEO0lBSUksNEJBQ1ksTUFBYyxFQUNkLFdBQXVCO1FBRHZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUVuQyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUM3QyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxNQUFlO1FBQ3RCLElBQUksSUFBSSxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUF4QlQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztTQUN2RCxDQUFDOzswQkFBQTtJQXNCRCx5QkFBQztBQUFELENBckJELEFBcUJFLElBQUE7QUFyQlcsMEJBQWtCLHFCQXFCN0IsQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSAnLi4vbW9kZWwvSVBsYXllcic7XHJcbmltcG9ydCB7IFRlYW1TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdGVhbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktZGFzaGJvYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBcclxuICAgIHBsYXllcnM6IElQbGF5ZXJbXVxyXG4gICAgSURCRW52aXJvbm1lbnQ6c3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHRlYW1TZXJ2aWNlOlRlYW1TZXJ2aWNlKXtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMudGVhbVNlcnZpY2UuZ2V0UGxheWVycyhcImR1bW15XCIpLnRoZW4ocGxheWVycz0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycy5zbGljZSgxLCA1KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnb3RvRGV0YWlsKHBsYXllcjogSVBsYXllcikge1xyXG4gICAgICAgIGxldCBsaW5rID0gWydQbGF5ZXJEZXRhaWwnLCB7IG5hbWU6IHBsYXllci5uYW1lIH1dO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
