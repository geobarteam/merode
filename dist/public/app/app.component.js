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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNkJBQTRCLHlCQUM1QixDQUFDLENBRG9EO0FBQ3JELCtCQUE4Qix1QkFDOUIsQ0FBQyxDQURvRDtBQUNyRCxvQ0FBbUMsaUNBQ25DLENBQUMsQ0FEbUU7QUFDcEUsa0NBQWlFLDRCQUE0QixDQUFDLENBQUE7QUFDOUYsd0NBQXNDLGdDQUFnQyxDQUFDLENBQUE7QUFxQ3ZFO0lBQUE7UUFDRSxVQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3BCLENBQUM7SUFyQ0Q7UUFBQywrQkFBVyxDQUFDO1lBQ1g7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osU0FBUyxFQUFFLDhCQUFhO2FBQ3pCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxXQUFXO2dCQUNqQixTQUFTLEVBQUUsd0NBQWtCO2dCQUM3QixZQUFZLEVBQUUsSUFBSTthQUNyQjtZQUNEO2dCQUNJLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsY0FBYztnQkFDcEIsU0FBUyxFQUFFLCtDQUFxQjthQUNuQztTQUNGLENBQUM7UUFDRCxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLGlNQU9YO1lBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7WUFDN0IsU0FBUyxFQUFFO2dCQUNYLG9DQUFnQjtnQkFDaEIsMEJBQVc7YUFDVjtTQUNKLENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlYW1TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90ZWFtLnNlcnZpY2UnXG5pbXBvcnQgeyBUZWFtQ29tcG9uZW50IH0gZnJvbSAnLi90ZWFtL3RlYW0uY29tcG9uZW50J1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCdcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7IFBsYXllckRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vdGVhbS9wbGF5ZXItZGV0YWlsLmNvbXBvbmVudCc7XG5cbkBSb3V0ZUNvbmZpZyhbXG4gIHtcbiAgICBwYXRoOiAnL3RlYW0nLFxuICAgIG5hbWU6ICdUZWFtJyxcbiAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnRcbiAgfSxcbiAge1xuICAgICAgcGF0aDogJy9kYXNoYm9hcmQnLFxuICAgICAgbmFtZTogJ0Rhc2hib2FyZCcsXG4gICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcbiAgICAgIHVzZUFzRGVmYXVsdDogdHJ1ZVxuICB9LFxuICB7XG4gICAgICBwYXRoOiAnL2RldGFpbC86bmFtZScsXG4gICAgICBuYW1lOiAnUGxheWVyRGV0YWlsJyxcbiAgICAgIGNvbXBvbmVudDogUGxheWVyRGV0YWlsQ29tcG9uZW50XG4gIH1cbl0pXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgIDxoMT57e3RpdGxlfX08L2gxPlxuICAgIDxuYXY+XG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnRGFzaGJvYXJkJ11cIj5EYXNoYm9hcmQ8L2E+XG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnVGVhbSddXCI+VGVhbTwvYT5cbiAgICA8L25hdj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2FwcC9hcHAuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW1xuICAgIFJPVVRFUl9QUk9WSURFUlMsXG4gICAgVGVhbVNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHRpdGxlID0gJ015IFRlYW0nO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
