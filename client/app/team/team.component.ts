
import { Component } from '@angular/core';
import { IPlayer } from '../model/IPlayer';
import { PlayerDetailComponent } from './player-detail.component';
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
    
    team:IPlayer[];
    constructor(
      private router: Router,
      private teamService: TeamService){
      
    }
    ngOnInit(){
      this.teamService.getPlayers("dummy").then(
        players => this.team = players);
    }
    
    selectedPlayer: IPlayer;
    
    title = 'Tour of players';
        
    onSelect(player:IPlayer){
      this.selectedPlayer = player;
    }
    
    gotoDetail(player: IPlayer) {
        let link = ['PlayerDetail', { name: player.name }];
        this.router.navigate(link);
        }
    gotoAddPlayer(){
        let link = ['AddPlayer'];
        this.router.navigate(link);
    }
}