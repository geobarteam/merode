import { Component } from '@angular/core';
import { TeamService } from './services/team.service'
import { TeamComponent } from './team/team.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <my-team></my-team>
  `,
  directives: [TeamComponent],
  providers: [
    TeamService
  ]
})
export class AppComponent {
  title = 'Tour of team';
}