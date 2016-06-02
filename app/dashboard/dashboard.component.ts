import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { TeamService } from '../services/team.service'

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    
    players: Player[]
    constructor(private teamService:TeamService){
       
    }
    
    ngOnInit(){
        this.teamService.getPlayers("dummy").then(players=> {
            this.players = players.slice(1, 5);
        })
    }
    
    gotoDetail(){ /* not implemented yet */}
    
 }
