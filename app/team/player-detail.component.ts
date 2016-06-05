import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'model/player'
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
       player: Player;
  
  ngOnInit(){
    let id = +this.routeParams.get('id');
    this.teamService.getPlayer(id)
        .then(player=> this.player = player);
  }
  goBack() {
    window.history.back();
  }
}
