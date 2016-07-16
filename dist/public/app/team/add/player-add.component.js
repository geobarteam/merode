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
var player_1 = require('../../model/player/player');
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
        __metadata('design:type', player_1.Player)
    ], PlayerAddComponent.prototype, "player", void 0);
    PlayerAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'player-detail',
            templateUrl: 'player-add.component.html'
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, router_deprecated_1.RouteParams])
    ], PlayerAddComponent);
    return PlayerAddComponent;
}());
exports.PlayerAddComponent = PlayerAddComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtL2FkZC9wbGF5ZXItYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBQ3pELHVCQUF1QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ25ELGtDQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3pELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBTzFEO0lBRUUsNEJBQ1EsV0FBd0IsRUFDeEIsV0FBd0I7UUFEeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDbEMsQ0FBQztJQUlDLHFDQUFRLEdBQVI7SUFFQSxDQUFDO0lBQ0QsbUNBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQVJHO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQVhkO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsMkJBQTJCO1NBQ3pDLENBQUM7OzBCQUFBO0lBZ0JGLHlCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSwwQkFBa0IscUJBZTlCLENBQUEiLCJmaWxlIjoiYXBwL3RlYW0vYWRkL3BsYXllci1hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9wbGF5ZXIvcGxheWVyJztcbmltcG9ydCB7IFJvdXRlUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHsgVGVhbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZWFtLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdwbGF5ZXItZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICdwbGF5ZXItYWRkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQbGF5ZXJBZGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgY29uc3RydWN0b3IoXG4gIHByaXZhdGUgdGVhbVNlcnZpY2U6IFRlYW1TZXJ2aWNlLFxuICBwcml2YXRlIHJvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xufVxuICAgICAgQElucHV0KCkgXG4gICAgICAgcGxheWVyOiBQbGF5ZXI7XG4gIFxuICBuZ09uSW5pdCgpe1xuICAgIFxuICB9XG4gIGdvQmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
