import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../model/IPlayer';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    
    players: IPlayer[]
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
    
    gotoDetail(player: IPlayer) {
        let link = ['PlayerDetail', { name: player.name }];
        this.router.navigate(link);
        }
    
 }
