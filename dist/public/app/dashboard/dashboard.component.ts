import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../model/IPlayer';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router-deprecated';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['./app/dashboard/dashboard.component.css']
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
