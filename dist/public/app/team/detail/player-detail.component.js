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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtL2RldGFpbC9wbGF5ZXItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBRXpELGtDQUE0Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3pELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBbUIxRDtJQUVFLCtCQUNRLFdBQXdCLEVBQ3hCLFdBQXdCO1FBRHhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2xDLENBQUM7SUFJQyx3Q0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDM0IsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFHLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQVZHO1FBQUMsWUFBSyxFQUFFOzt5REFBQTtJQXRCZDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLHFTQVVYO1lBQ0QsU0FBUyxFQUFDLENBQUMsNkJBQTZCLENBQUM7U0FDeEMsQ0FBQzs7NkJBQUE7SUFrQkYsNEJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLDZCQUFxQix3QkFpQmpDLENBQUEiLCJmaWxlIjoiYXBwL3RlYW0vZGV0YWlsL3BsYXllci1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJUGxheWVyIH0gZnJvbSAnLi4vLi4vbW9kZWwvSVBsYXllcic7XG5pbXBvcnQgeyBSb3V0ZVBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7IFRlYW1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVhbS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdwbGF5ZXItZGV0YWlsJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAqbmdJZj1cInBsYXllclwiPlxuICAgIDxoMj57e3BsYXllci5uYW1lfX0gZGV0YWlscyE8L2gyPlxuICAgIDxkaXY+PGxhYmVsPmlkOiA8L2xhYmVsPnt7cGxheWVyLmlkfX08L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPm5hbWU6IDwvbGFiZWw+XG4gICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJwbGF5ZXIubmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiLz5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJnb0JhY2soKVwiPkJhY2s8L2J1dHRvbj5cbiAgPC9kaXY+XG5gLFxuc3R5bGVVcmxzOlsncGxheWVyLWRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGxheWVyRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuICBwcml2YXRlIHRlYW1TZXJ2aWNlOiBUZWFtU2VydmljZSxcbiAgcHJpdmF0ZSByb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHtcbn1cbiAgICAgIEBJbnB1dCgpIFxuICAgICAgIHBsYXllcjogSVBsYXllcjtcbiAgXG4gIG5nT25Jbml0KCl7XG4gICAgbGV0IG5hbWUgPSB0aGlzLnJvdXRlUGFyYW1zLmdldCgnbmFtZScpO1xuICAgIHRoaXMudGVhbVNlcnZpY2UuZ2V0UGxheWVyKG5hbWUpXG4gICAgICAgIC50aGVuKHBsYXllcj0+IHRoaXMucGxheWVyID0gcGxheWVyKTtcbiAgfVxuICBnb0JhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
