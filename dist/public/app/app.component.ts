import { Component } from '@angular/core';
import { TeamService } from './services/team.service'
import { TeamComponent } from './team/team.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { RegisterComponent} from './register/register.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { PlayerDetailComponent } from './team/detail/player-detail.component';
import { PlayerAddComponent } from './team/add/player-add.component';
import { UrlHelper } from './services/url.helper';
import { UserService } from './services/user.service';


@RouteConfig([
  {
    path: '/team',
    name: 'Team',
    component: TeamComponent
  },
  {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardComponent
  },
  {
      path: '/register',
      name: 'Register',
      component: RegisterComponent,
      useAsDefault: true
  },
  {
      path: '/detail/:name',
      name: 'PlayerDetail',
      component: PlayerDetailComponent
  },
  {
      path: '/add',
      name: 'AddPlayer',
      component: PlayerAddComponent
  }
])
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
   <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Team']">Team</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
    providers: [
    ROUTER_PROVIDERS,
    TeamService,
    UrlHelper,
    UserService
    ]
})
export class AppComponent {
  title = 'My Team';
}