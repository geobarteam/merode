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
var team_service_1 = require('../../services/team.service');
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
            moduleId: module.id,
            selector: 'player-detail',
            templateUrl: 'player-add.component.html',
            styleUrls: ['player-detail.component.css']
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, router_deprecated_1.RouteParams])
    ], PlayerAddComponent);
    return PlayerAddComponent;
}());
exports.PlayerAddComponent = PlayerAddComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtL2FkZC9wbGF5ZXItYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBRXpELGtDQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3pELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBUzFEO0lBRUUsNEJBQ1EsV0FBd0IsRUFDeEIsV0FBd0I7UUFEeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDbEMsQ0FBQztJQUlDLHFDQUFRLEdBQVI7SUFFQSxDQUFDO0lBQ0QsbUNBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQVJHO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQVpkO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBQyxDQUFDLDZCQUE2QixDQUFDO1NBQzFDLENBQUM7OzBCQUFBO0lBZ0JGLHlCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSwwQkFBa0IscUJBZTlCLENBQUEiLCJmaWxlIjoiYXBwL3RlYW0vYWRkL3BsYXllci1hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSAnLi4vLi4vbW9kZWwvSVBsYXllcic7XG5pbXBvcnQgeyBSb3V0ZVBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7IFRlYW1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVhbS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdwbGF5ZXItZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICdwbGF5ZXItYWRkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOlsncGxheWVyLWRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGxheWVyQWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuICBwcml2YXRlIHRlYW1TZXJ2aWNlOiBUZWFtU2VydmljZSxcbiAgcHJpdmF0ZSByb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHtcbn1cbiAgICAgIEBJbnB1dCgpIFxuICAgICAgIHBsYXllcjogSVBsYXllcjtcbiAgXG4gIG5nT25Jbml0KCl7XG4gICAgXG4gIH1cbiAgZ29CYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
