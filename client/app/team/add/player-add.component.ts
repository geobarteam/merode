import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../model/player/player';
import { RouteParams } from '@angular/router-deprecated';
import { TeamService } from '../../services/team.service';

@Component({
  moduleId: module.id,
  selector: 'player-detail',
  templateUrl: 'player-add.component.html'
})
export class PlayerAddComponent implements OnInit {
  
  constructor(
  private teamService: TeamService,
  private routeParams: RouteParams) {
}
      @Input() 
       player: Player;
  
  ngOnInit(){
    
  }
  goBack() {
    window.history.back();
  }
}