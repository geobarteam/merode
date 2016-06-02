import { Component } from '@angular/core';
import { TeamService } from './services/team.service'
import { TeamComponent } from './team/team.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@RouteConfig([
  {
    path: '/team',
    name: 'Team',
    component: TeamComponent
  },
  {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardComponent,
      useAsDefault: true
  }
])
@Component({
    selector: 'my-app',
    template: `
   <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Team']">Team</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
    providers: [
    ROUTER_PROVIDERS,
    TeamService
    ]
})
export class AppComponent {
  title = 'Tour of team';
}