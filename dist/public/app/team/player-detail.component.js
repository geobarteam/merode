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
var router_deprecated_1 = require('@angular/router-deprecated');
var team_service_1 = require('../services/team.service');
var PlayerDetailComponent = (function () {
    function PlayerDetailComponent(teamService, routeParams) {
        this.teamService = teamService;
        this.routeParams = routeParams;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.routeParams.get('name');
        this.teamService.getPlayer(name)
            .then(function (player) { return _this.player = player; });
    };
    PlayerDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlayerDetailComponent.prototype, "player", void 0);
    PlayerDetailComponent = __decorate([
        core_1.Component({
            selector: 'player-detail',
            template: "\n  <div *ngIf=\"player\">\n    <h2>{{player.name}} details!</h2>\n    <div><label>id: </label>{{player.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"player.name\" placeholder=\"name\"/>\n    </div>\n    <button (click)=\"goBack()\">Back</button>\n  </div>\n",
            styleUrls: ['./app/team/player-detail.component.css']
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, router_deprecated_1.RouteParams])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());
exports.PlayerDetailComponent = PlayerDetailComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtL3BsYXllci1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFFekQsa0NBQTRCLDRCQUE0QixDQUFDLENBQUE7QUFDekQsNkJBQTRCLDBCQUEwQixDQUFDLENBQUE7QUFrQnZEO0lBRUUsK0JBQ1EsV0FBd0IsRUFDeEIsV0FBd0I7UUFEeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDbEMsQ0FBQztJQUlDLHdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUMzQixJQUFJLENBQUMsVUFBQSxNQUFNLElBQUcsT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxzQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBVkc7UUFBQyxZQUFLLEVBQUU7O3lEQUFBO0lBckJkO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxxU0FVWDtZQUNELFNBQVMsRUFBQyxDQUFDLHdDQUF3QyxDQUFDO1NBQ25ELENBQUM7OzZCQUFBO0lBa0JGLDRCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSw2QkFBcUIsd0JBaUJqQyxDQUFBIiwiZmlsZSI6ImFwcC90ZWFtL3BsYXllci1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQbGF5ZXIgfSBmcm9tICcuLi9tb2RlbC9JUGxheWVyJztcclxuaW1wb3J0IHsgUm91dGVQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7IFRlYW1TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdGVhbS5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BsYXllci1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiAqbmdJZj1cInBsYXllclwiPlxyXG4gICAgPGgyPnt7cGxheWVyLm5hbWV9fSBkZXRhaWxzITwvaDI+XHJcbiAgICA8ZGl2PjxsYWJlbD5pZDogPC9sYWJlbD57e3BsYXllci5pZH19PC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bGFiZWw+bmFtZTogPC9sYWJlbD5cclxuICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwicGxheWVyLm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hbWVcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImdvQmFjaygpXCI+QmFjazwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5gLFxyXG5zdHlsZVVybHM6WycuL2FwcC90ZWFtL3BsYXllci1kZXRhaWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gIHByaXZhdGUgdGVhbVNlcnZpY2U6IFRlYW1TZXJ2aWNlLFxyXG4gIHByaXZhdGUgcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7XHJcbn1cclxuICAgICAgQElucHV0KCkgXHJcbiAgICAgICBwbGF5ZXI6IElQbGF5ZXI7XHJcbiAgXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIGxldCBuYW1lID0gdGhpcy5yb3V0ZVBhcmFtcy5nZXQoJ25hbWUnKTtcclxuICAgIHRoaXMudGVhbVNlcnZpY2UuZ2V0UGxheWVyKG5hbWUpXHJcbiAgICAgICAgLnRoZW4ocGxheWVyPT4gdGhpcy5wbGF5ZXIgPSBwbGF5ZXIpO1xyXG4gIH1cclxuICBnb0JhY2soKSB7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
