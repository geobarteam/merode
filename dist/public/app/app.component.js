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
var team_service_1 = require('./services/team.service');
var team_component_1 = require('./team/team.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var player_detail_component_1 = require('./team/player-detail.component');
var player_add_component_1 = require('./team/player-add.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My Team';
    }
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/team',
                name: 'Team',
                component: team_component_1.TeamComponent
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:name',
                name: 'PlayerDetail',
                component: player_detail_component_1.PlayerDetailComponent
            },
            {
                path: '/add',
                name: 'AddPlayer',
                component: player_add_component_1.PlayerAddComponent
            }
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "\n   <h1>{{title}}</h1>\n    <nav>\n        <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n        <a [routerLink]=\"['Team']\">Team</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['./app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                team_service_1.TeamService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNkJBQTRCLHlCQUM1QixDQUFDLENBRG9EO0FBQ3JELCtCQUE4Qix1QkFDOUIsQ0FBQyxDQURvRDtBQUNyRCxvQ0FBbUMsaUNBQ25DLENBQUMsQ0FEbUU7QUFDcEUsa0NBQWlFLDRCQUE0QixDQUFDLENBQUE7QUFDOUYsd0NBQXNDLGdDQUFnQyxDQUFDLENBQUE7QUFDdkUscUNBQW1DLDZCQUE2QixDQUFDLENBQUE7QUEwQ2pFO0lBQUE7UUFDRSxVQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3BCLENBQUM7SUExQ0Q7UUFBQywrQkFBVyxDQUFDO1lBQ1g7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osU0FBUyxFQUFFLDhCQUFhO2FBQ3pCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxXQUFXO2dCQUNqQixTQUFTLEVBQUUsd0NBQWtCO2dCQUM3QixZQUFZLEVBQUUsSUFBSTthQUNyQjtZQUNEO2dCQUNJLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsY0FBYztnQkFDcEIsU0FBUyxFQUFFLCtDQUFxQjthQUNuQztZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxXQUFXO2dCQUNqQixTQUFTLEVBQUUseUNBQWtCO2FBQ2hDO1NBQ0YsQ0FBQztRQUNELGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsaU1BT1g7WUFDRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztZQUM3QixTQUFTLEVBQUU7Z0JBQ1gsb0NBQWdCO2dCQUNoQiwwQkFBVzthQUNWO1NBQ0osQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVhbVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RlYW0uc2VydmljZSdcbmltcG9ydCB7IFRlYW1Db21wb25lbnQgfSBmcm9tICcuL3RlYW0vdGVhbS5jb21wb25lbnQnXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50J1xuaW1wb3J0IHsgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHsgUGxheWVyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi90ZWFtL3BsYXllci1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBsYXllckFkZENvbXBvbmVudCB9IGZyb20gJy4vdGVhbS9wbGF5ZXItYWRkLmNvbXBvbmVudCc7XG5cbkBSb3V0ZUNvbmZpZyhbXG4gIHtcbiAgICBwYXRoOiAnL3RlYW0nLFxuICAgIG5hbWU6ICdUZWFtJyxcbiAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnRcbiAgfSxcbiAge1xuICAgICAgcGF0aDogJy9kYXNoYm9hcmQnLFxuICAgICAgbmFtZTogJ0Rhc2hib2FyZCcsXG4gICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcbiAgICAgIHVzZUFzRGVmYXVsdDogdHJ1ZVxuICB9LFxuICB7XG4gICAgICBwYXRoOiAnL2RldGFpbC86bmFtZScsXG4gICAgICBuYW1lOiAnUGxheWVyRGV0YWlsJyxcbiAgICAgIGNvbXBvbmVudDogUGxheWVyRGV0YWlsQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICAgIHBhdGg6ICcvYWRkJyxcbiAgICAgIG5hbWU6ICdBZGRQbGF5ZXInLFxuICAgICAgY29tcG9uZW50OiBQbGF5ZXJBZGRDb21wb25lbnRcbiAgfVxuXSlcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgPGgxPnt7dGl0bGV9fTwvaDE+XG4gICAgPG5hdj5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydEYXNoYm9hcmQnXVwiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydUZWFtJ11cIj5UZWFtPC9hPlxuICAgIDwvbmF2PlxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwL2FwcC5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgUk9VVEVSX1BST1ZJREVSUyxcbiAgICBUZWFtU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgdGl0bGUgPSAnTXkgVGVhbSc7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
