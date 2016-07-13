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
        __metadata('design:type', player_1.Player)
    ], PlayerDetailComponent.prototype, "player", void 0);
    PlayerDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'player-detail',
            template: "\n  <div *ngIf=\"player\">\n    <h2>{{player.name}} details!</h2>\n    <div><label>id: </label>{{player.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"player.name\" placeholder=\"name\"/>\n    </div>\n    <button (click)=\"goBack()\">Back</button>\n  </div>\n",
            styleUrls: ['player-detail.component.css']
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, router_deprecated_1.RouteParams])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());
exports.PlayerDetailComponent = PlayerDetailComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtL2RldGFpbC9wbGF5ZXItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBQ3pELHVCQUF1QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ25ELGtDQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3pELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBbUIxRDtJQUVFLCtCQUNRLFdBQXdCLEVBQ3hCLFdBQXdCO1FBRHhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2xDLENBQUM7SUFJQyx3Q0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDM0IsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFHLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQVZHO1FBQUMsWUFBSyxFQUFFOzt5REFBQTtJQXRCZDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLHFTQVVYO1lBQ0QsU0FBUyxFQUFDLENBQUMsNkJBQTZCLENBQUM7U0FDeEMsQ0FBQzs7NkJBQUE7SUFrQkYsNEJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLDZCQUFxQix3QkFpQmpDLENBQUEiLCJmaWxlIjoiYXBwL3RlYW0vZGV0YWlsL3BsYXllci1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9wbGF5ZXIvcGxheWVyJztcbmltcG9ydCB7IFJvdXRlUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHsgVGVhbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZWFtLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3BsYXllci1kZXRhaWwnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICpuZ0lmPVwicGxheWVyXCI+XG4gICAgPGgyPnt7cGxheWVyLm5hbWV9fSBkZXRhaWxzITwvaDI+XG4gICAgPGRpdj48bGFiZWw+aWQ6IDwvbGFiZWw+e3twbGF5ZXIuaWR9fTwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+bmFtZTogPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInBsYXllci5uYW1lXCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIvPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gKGNsaWNrKT1cImdvQmFjaygpXCI+QmFjazwvYnV0dG9uPlxuICA8L2Rpdj5cbmAsXG5zdHlsZVVybHM6WydwbGF5ZXItZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQbGF5ZXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgY29uc3RydWN0b3IoXG4gIHByaXZhdGUgdGVhbVNlcnZpY2U6IFRlYW1TZXJ2aWNlLFxuICBwcml2YXRlIHJvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xufVxuICAgICAgQElucHV0KCkgXG4gICAgICAgcGxheWVyOiBQbGF5ZXI7XG4gIFxuICBuZ09uSW5pdCgpe1xuICAgIGxldCBuYW1lID0gdGhpcy5yb3V0ZVBhcmFtcy5nZXQoJ25hbWUnKTtcbiAgICB0aGlzLnRlYW1TZXJ2aWNlLmdldFBsYXllcihuYW1lKVxuICAgICAgICAudGhlbihwbGF5ZXI9PiB0aGlzLnBsYXllciA9IHBsYXllcik7XG4gIH1cbiAgZ29CYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
