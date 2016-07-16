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
var player_detail_component_1 = require('./team/detail/player-detail.component');
var player_add_component_1 = require('./team/add/player-add.component');
var url_helper_1 = require('./services/url.helper');
var user_service_1 = require('./services/user.service');
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
            moduleId: module.id,
            selector: 'my-app',
            template: "\n   <h1>{{title}}</h1>\n    <nav>\n        <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n        <a [routerLink]=\"['Team']\">Team</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                team_service_1.TeamService,
                url_helper_1.UrlHelper,
                user_service_1.UserService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNkJBQTRCLHlCQUM1QixDQUFDLENBRG9EO0FBQ3JELCtCQUE4Qix1QkFDOUIsQ0FBQyxDQURvRDtBQUNyRCxvQ0FBbUMsaUNBQ25DLENBQUMsQ0FEbUU7QUFDcEUsbUNBQWlDLCtCQUNqQyxDQUFDLENBRCtEO0FBQ2hFLGtDQUFpRSw0QkFBNEIsQ0FBQyxDQUFBO0FBQzlGLHdDQUFzQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzlFLHFDQUFtQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3JFLDJCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBQ2xELDZCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBbUR0RDtJQUFBO1FBQ0UsVUFBSyxHQUFHLFNBQVMsQ0FBQztJQUNwQixDQUFDO0lBbEREO1FBQUMsK0JBQVcsQ0FBQztZQUNYO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLFNBQVMsRUFBRSw4QkFBYTthQUN6QjtZQUNEO2dCQUNJLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsV0FBVztnQkFDakIsU0FBUyxFQUFFLHdDQUFrQjthQUNoQztZQUNEO2dCQUNJLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHNDQUFpQjtnQkFDNUIsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFNBQVMsRUFBRSwrQ0FBcUI7YUFDbkM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsV0FBVztnQkFDakIsU0FBUyxFQUFFLHlDQUFrQjthQUNoQztTQUNGLENBQUM7UUFDRCxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxpTUFPWDtZQUNELFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ2hDLFVBQVUsRUFBRSxDQUFDLHFDQUFpQixDQUFDO1lBQzdCLFNBQVMsRUFBRTtnQkFDWCxvQ0FBZ0I7Z0JBQ2hCLDBCQUFXO2dCQUNYLHNCQUFTO2dCQUNULDBCQUFXO2FBQ1Y7U0FDSixDQUFDOztvQkFBQTtJQUdGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZWFtU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGVhbS5zZXJ2aWNlJ1xuaW1wb3J0IHsgVGVhbUNvbXBvbmVudCB9IGZyb20gJy4vdGVhbS90ZWFtLmNvbXBvbmVudCdcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5pbXBvcnQgeyBQbGF5ZXJEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3RlYW0vZGV0YWlsL3BsYXllci1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFBsYXllckFkZENvbXBvbmVudCB9IGZyb20gJy4vdGVhbS9hZGQvcGxheWVyLWFkZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXJsSGVscGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy91cmwuaGVscGVyJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuXG5cbkBSb3V0ZUNvbmZpZyhbXG4gIHtcbiAgICBwYXRoOiAnL3RlYW0nLFxuICAgIG5hbWU6ICdUZWFtJyxcbiAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnRcbiAgfSxcbiAge1xuICAgICAgcGF0aDogJy9kYXNoYm9hcmQnLFxuICAgICAgbmFtZTogJ0Rhc2hib2FyZCcsXG4gICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudFxuICB9LFxuICB7XG4gICAgICBwYXRoOiAnL3JlZ2lzdGVyJyxcbiAgICAgIG5hbWU6ICdSZWdpc3RlcicsXG4gICAgICBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgdXNlQXNEZWZhdWx0OiB0cnVlXG4gIH0sXG4gIHtcbiAgICAgIHBhdGg6ICcvZGV0YWlsLzpuYW1lJyxcbiAgICAgIG5hbWU6ICdQbGF5ZXJEZXRhaWwnLFxuICAgICAgY29tcG9uZW50OiBQbGF5ZXJEZXRhaWxDb21wb25lbnRcbiAgfSxcbiAge1xuICAgICAgcGF0aDogJy9hZGQnLFxuICAgICAgbmFtZTogJ0FkZFBsYXllcicsXG4gICAgICBjb21wb25lbnQ6IFBsYXllckFkZENvbXBvbmVudFxuICB9XG5dKVxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgIDxoMT57e3RpdGxlfX08L2gxPlxuICAgIDxuYXY+XG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnRGFzaGJvYXJkJ11cIj5EYXNoYm9hcmQ8L2E+XG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnVGVhbSddXCI+VGVhbTwvYT5cbiAgICA8L25hdj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gIGAsXG4gIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW1xuICAgIFJPVVRFUl9QUk9WSURFUlMsXG4gICAgVGVhbVNlcnZpY2UsXG4gICAgVXJsSGVscGVyLFxuICAgIFVzZXJTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdNeSBUZWFtJztcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
