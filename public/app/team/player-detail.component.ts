import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../model/IPlayer';
import { RouteParams } from '@angular/router-deprecated';
import { TeamService } from '../services/team.service';


@Component({
  selector: 'player-detail',
  template: `
  <div *ngIf="player">
    <h2>{{player.name}} details!</h2>
    <div><label>id: </label>{{player.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="player.name" placeholder="name"/>
    </div>
    <button (click)="goBack()">Back</button>
  </div>
`,
styleUrls:['./app/team/player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  
  constructor(
  private teamService: TeamService,
  private routeParams: RouteParams) {
}
      @Input() 
       player: IPlayer;
  
  ngOnInit(){
    let name = this.routeParams.get('name');
    this.teamService.getPlayer(name)
        .then(player=> this.player = player);
  }
  goBack() {
    window.history.back();
  }
}
