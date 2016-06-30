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
var register_component_1 = require('./register/register.component');
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
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: '/register',
                name: 'Register',
                component: register_component_1.RegisterComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNkJBQTRCLHlCQUM1QixDQUFDLENBRG9EO0FBQ3JELCtCQUE4Qix1QkFDOUIsQ0FBQyxDQURvRDtBQUNyRCxvQ0FBbUMsaUNBQ25DLENBQUMsQ0FEbUU7QUFDcEUsbUNBQWlDLCtCQUNqQyxDQUFDLENBRCtEO0FBQ2hFLGtDQUFpRSw0QkFBNEIsQ0FBQyxDQUFBO0FBQzlGLHdDQUFzQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3ZFLHFDQUFtQyw2QkFBNkIsQ0FBQyxDQUFBO0FBK0NqRTtJQUFBO1FBQ0UsVUFBSyxHQUFHLFNBQVMsQ0FBQztJQUNwQixDQUFDO0lBL0NEO1FBQUMsK0JBQVcsQ0FBQztZQUNYO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLFNBQVMsRUFBRSw4QkFBYTthQUN6QjtZQUNEO2dCQUNJLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsV0FBVztnQkFDakIsU0FBUyxFQUFFLHdDQUFrQjthQUNoQztZQUNEO2dCQUNJLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHNDQUFpQjtnQkFDNUIsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFNBQVMsRUFBRSwrQ0FBcUI7YUFDbkM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsV0FBVztnQkFDakIsU0FBUyxFQUFFLHlDQUFrQjthQUNoQztTQUNGLENBQUM7UUFDRCxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLGlNQU9YO1lBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7WUFDN0IsU0FBUyxFQUFFO2dCQUNYLG9DQUFnQjtnQkFDaEIsMEJBQVc7YUFDVjtTQUNKLENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlYW1TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90ZWFtLnNlcnZpY2UnXG5pbXBvcnQgeyBUZWFtQ29tcG9uZW50IH0gZnJvbSAnLi90ZWFtL3RlYW0uY29tcG9uZW50J1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCdcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50fSBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCdcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7IFBsYXllckRldGFpbENvbXBvbmVudCB9IGZyb20gJy4vdGVhbS9wbGF5ZXItZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF5ZXJBZGRDb21wb25lbnQgfSBmcm9tICcuL3RlYW0vcGxheWVyLWFkZC5jb21wb25lbnQnO1xuXG5AUm91dGVDb25maWcoW1xuICB7XG4gICAgcGF0aDogJy90ZWFtJyxcbiAgICBuYW1lOiAnVGVhbScsXG4gICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICAgIHBhdGg6ICcvZGFzaGJvYXJkJyxcbiAgICAgIG5hbWU6ICdEYXNoYm9hcmQnLFxuICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgICAgcGF0aDogJy9yZWdpc3RlcicsXG4gICAgICBuYW1lOiAnUmVnaXN0ZXInLFxuICAgICAgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgIHVzZUFzRGVmYXVsdDogdHJ1ZVxuICB9LFxuICB7XG4gICAgICBwYXRoOiAnL2RldGFpbC86bmFtZScsXG4gICAgICBuYW1lOiAnUGxheWVyRGV0YWlsJyxcbiAgICAgIGNvbXBvbmVudDogUGxheWVyRGV0YWlsQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICAgIHBhdGg6ICcvYWRkJyxcbiAgICAgIG5hbWU6ICdBZGRQbGF5ZXInLFxuICAgICAgY29tcG9uZW50OiBQbGF5ZXJBZGRDb21wb25lbnRcbiAgfVxuXSlcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgPGgxPnt7dGl0bGV9fTwvaDE+XG4gICAgPG5hdj5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydEYXNoYm9hcmQnXVwiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydUZWFtJ11cIj5UZWFtPC9hPlxuICAgIDwvbmF2PlxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwL2FwcC5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgUk9VVEVSX1BST1ZJREVSUyxcbiAgICBUZWFtU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgdGl0bGUgPSAnTXkgVGVhbSc7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
