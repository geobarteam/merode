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
                url_helper_1.UrlHelper
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNkJBQTRCLHlCQUM1QixDQUFDLENBRG9EO0FBQ3JELCtCQUE4Qix1QkFDOUIsQ0FBQyxDQURvRDtBQUNyRCxvQ0FBbUMsaUNBQ25DLENBQUMsQ0FEbUU7QUFDcEUsbUNBQWlDLCtCQUNqQyxDQUFDLENBRCtEO0FBQ2hFLGtDQUFpRSw0QkFBNEIsQ0FBQyxDQUFBO0FBQzlGLHdDQUFzQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzlFLHFDQUFtQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3JFLDJCQUEwQix1QkFHMUIsQ0FBQyxDQUhnRDtBQWtEakQ7SUFBQTtRQUNFLFVBQUssR0FBRyxTQUFTLENBQUM7SUFDcEIsQ0FBQztJQWpERDtRQUFDLCtCQUFXLENBQUM7WUFDWDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUsOEJBQWE7YUFDekI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7YUFDaEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxzQ0FBaUI7Z0JBQzVCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLElBQUksRUFBRSxjQUFjO2dCQUNwQixTQUFTLEVBQUUsK0NBQXFCO2FBQ25DO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSx5Q0FBa0I7YUFDaEM7U0FDRixDQUFDO1FBQ0QsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsaU1BT1g7WUFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNoQyxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztZQUM3QixTQUFTLEVBQUU7Z0JBQ1gsb0NBQWdCO2dCQUNoQiwwQkFBVztnQkFDWCxzQkFBUzthQUNSO1NBQ0osQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVhbVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RlYW0uc2VydmljZSdcbmltcG9ydCB7IFRlYW1Db21wb25lbnQgfSBmcm9tICcuL3RlYW0vdGVhbS5jb21wb25lbnQnXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50J1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnR9IGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHsgUGxheWVyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi90ZWFtL2RldGFpbC9wbGF5ZXItZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF5ZXJBZGRDb21wb25lbnQgfSBmcm9tICcuL3RlYW0vYWRkL3BsYXllci1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7IFVybEhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvdXJsLmhlbHBlcidcblxuXG5AUm91dGVDb25maWcoW1xuICB7XG4gICAgcGF0aDogJy90ZWFtJyxcbiAgICBuYW1lOiAnVGVhbScsXG4gICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICAgIHBhdGg6ICcvZGFzaGJvYXJkJyxcbiAgICAgIG5hbWU6ICdEYXNoYm9hcmQnLFxuICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgICAgcGF0aDogJy9yZWdpc3RlcicsXG4gICAgICBuYW1lOiAnUmVnaXN0ZXInLFxuICAgICAgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgIHVzZUFzRGVmYXVsdDogdHJ1ZVxuICB9LFxuICB7XG4gICAgICBwYXRoOiAnL2RldGFpbC86bmFtZScsXG4gICAgICBuYW1lOiAnUGxheWVyRGV0YWlsJyxcbiAgICAgIGNvbXBvbmVudDogUGxheWVyRGV0YWlsQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICAgIHBhdGg6ICcvYWRkJyxcbiAgICAgIG5hbWU6ICdBZGRQbGF5ZXInLFxuICAgICAgY29tcG9uZW50OiBQbGF5ZXJBZGRDb21wb25lbnRcbiAgfVxuXSlcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICA8aDE+e3t0aXRsZX19PC9oMT5cbiAgICA8bmF2PlxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ0Rhc2hib2FyZCddXCI+RGFzaGJvYXJkPC9hPlxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ1RlYW0nXVwiPlRlYW08L2E+XG4gICAgPC9uYXY+XG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICBgLFxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICBST1VURVJfUFJPVklERVJTLFxuICAgIFRlYW1TZXJ2aWNlLFxuICAgIFVybEhlbHBlclxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgdGl0bGUgPSAnTXkgVGVhbSc7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
