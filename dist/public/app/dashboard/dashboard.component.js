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
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, team_service_1.TeamService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELDZCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZELGtDQUF1Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBUXBEO0lBS0ksNEJBQ1ksTUFBYyxFQUNkLFdBQXVCO1FBRHZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUVuQyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUM3QyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxNQUFjO1FBQ3JCLElBQUksSUFBSSxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUExQlQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzs7MEJBQUE7SUF1QkQseUJBQUM7QUFBRCxDQXRCRCxBQXNCRSxJQUFBO0FBdEJXLDBCQUFrQixxQkFzQjdCLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL21vZGVsL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0IHsgVGVhbVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90ZWFtLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdteS1kYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXNoYm9hcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG4gICAgXG4gICAgcGxheWVyczogUGxheWVyW11cbiAgICBJREJFbnZpcm9ubWVudDpzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgdGVhbVNlcnZpY2U6VGVhbVNlcnZpY2Upe1xuICAgIFxuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLnRlYW1TZXJ2aWNlLmdldFBsYXllcnMoXCJkdW1teVwiKS50aGVuKHBsYXllcnM9PiB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJzLnNsaWNlKDEsIDUpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBnb3RvRGV0YWlsKHBsYXllcjogUGxheWVyKSB7XG4gICAgICAgIGxldCBsaW5rID0gWydQbGF5ZXJEZXRhaWwnLCB7IG5hbWU6IHBsYXllci5uYW1lIH1dO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcbiAgICAgICAgfVxuICAgIFxuIH1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
