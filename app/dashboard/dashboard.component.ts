import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router-deprecated';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['./app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    players: Player[]
    constructor(
        private router: Router,
        private teamService:TeamService){
       
    }
    
    ngOnInit(){
        this.teamService.getPlayers("dummy").then(players=> {
            this.players = players.slice(1, 5);
        })
    }
    
    gotoDetail(player: Player) {
        let link = ['PlayerDetail', { id: player.id }];
        this.router.navigate(link);
        }
    
 }
