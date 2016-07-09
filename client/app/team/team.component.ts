
import { Component } from '@angular/core';
import { Player } from '../model/player/player';
import { PlayerDetailComponent } from './detail/player-detail.component';
import { TeamService } from '../services/team.service'
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-team',
    templateUrl: 'app/team/team.html',
    styleUrls: ['./app/team/team.css'],
    directives: [PlayerDetailComponent]
})
export class TeamComponent implements OnInit { 
    
    team:Player[];
    constructor(
      private router: Router,
      private teamService: TeamService){
      
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
    
    gotoDetail(player:Player) {
        let link = ['PlayerDetail', { name: player.name }];
        this.router.navigate(link);
        }
    gotoAddPlayer(){
        let link = ['AddPlayer'];
        this.router.navigate(link);
    }
}