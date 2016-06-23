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
var PlayerAddComponent = (function () {
    function PlayerAddComponent(teamService, routeParams) {
        this.teamService = teamService;
        this.routeParams = routeParams;
    }
    PlayerAddComponent.prototype.ngOnInit = function () {
    };
    PlayerAddComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlayerAddComponent.prototype, "player", void 0);
    PlayerAddComponent = __decorate([
        core_1.Component({
            selector: 'player-detail',
            templateUrl: 'app/team/player-add.component.html',
            styleUrls: ['./app/team/player-detail.component.css']
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, router_deprecated_1.RouteParams])
    ], PlayerAddComponent);
    return PlayerAddComponent;
}());
exports.PlayerAddComponent = PlayerAddComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtL3BsYXllci1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFFekQsa0NBQTRCLDRCQUE0QixDQUFDLENBQUE7QUFDekQsNkJBQTRCLDBCQUEwQixDQUFDLENBQUE7QUFRdkQ7SUFFRSw0QkFDUSxXQUF3QixFQUN4QixXQUF3QjtRQUR4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNsQyxDQUFDO0lBSUMscUNBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCxtQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBUkc7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBWGQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLG9DQUFvQztZQUNuRCxTQUFTLEVBQUMsQ0FBQyx3Q0FBd0MsQ0FBQztTQUNuRCxDQUFDOzswQkFBQTtJQWdCRix5QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksMEJBQWtCLHFCQWU5QixDQUFBIiwiZmlsZSI6ImFwcC90ZWFtL3BsYXllci1hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSAnLi4vbW9kZWwvSVBsYXllcic7XG5pbXBvcnQgeyBSb3V0ZVBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7IFRlYW1TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdGVhbS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwbGF5ZXItZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvdGVhbS9wbGF5ZXItYWRkLmNvbXBvbmVudC5odG1sJyxcbnN0eWxlVXJsczpbJy4vYXBwL3RlYW0vcGxheWVyLWRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGxheWVyQWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuICBwcml2YXRlIHRlYW1TZXJ2aWNlOiBUZWFtU2VydmljZSxcbiAgcHJpdmF0ZSByb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHtcbn1cbiAgICAgIEBJbnB1dCgpIFxuICAgICAgIHBsYXllcjogSVBsYXllcjtcbiAgXG4gIG5nT25Jbml0KCl7XG4gICAgXG4gIH1cbiAgZ29CYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
