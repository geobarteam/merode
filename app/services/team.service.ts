import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Player } from '../../model/player';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class TeamService {

  private playerUrl = 'http://localhost:3000/player';  // URL to web api

  constructor(private http: Http) { }

  getPlayers(teamName:string): Promise<Player[]> {
    return this.http.get(this.playerUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getPlayer(id: number) {
    return this.getPlayers("dummy")
               .then(players => players.filter(player => player.id === id)[0]);
  } 

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
