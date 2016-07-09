import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player/player';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    
    players: Player[]
    IDBEnvironment:string;
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
        let link = ['PlayerDetail', { name: player.name }];
        this.router.navigate(link);
        }
    
 }
