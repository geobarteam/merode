import { Component } from '@angular/core';
import { Player } from '../model/player';
import { PlayerDetailComponent } from './player-detail.component';
import { TeamService } from '../services/team.service'
import { OnInit } from '@angular/core';


@Component({
    selector: 'my-team',
    templateUrl: 'app/team/team.html',
    styleUrls: ['./app/team/team.css'],
    directives: [PlayerDetailComponent]
})
export class TeamComponent implements OnInit { 
    
    team:Player[];
    constructor(private teamService: TeamService){
      
    }
    ngOnInit(){
      this.teamService.getPlayers("dummy").then(
        players => this.team = players);
    }
    
    selectedPlayer: Player;
    
    title = 'Tour of players';
        
    onSelect(player:Player){
      this.selectedPlayer = player;
    }
}