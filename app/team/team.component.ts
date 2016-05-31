import { Component } from '@angular/core';
import { Player } from './player';
import { PlayerDetailComponent } from './player-detail.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/team/team.html',
    styleUrls: ['./app/team/team.css'],
    directives: [PlayerDetailComponent]
})
export class TeamComponent { 
    
    public team = HEROES;
    selectedPlayer: Player;
    
    title = 'Tour of players';
        
    onSelect(player:Player){
      this.selectedPlayer = player;
    }
}

var HEROES: Player[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];



