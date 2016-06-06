import { Player } from '../../model/player';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeamService {

  private heroesUrl = 'api/player';  // URL to web api

  constructor(private http: Http) { }

  getPlayers(teamName:string):Promise<Player[]>{
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getPlayer(id: number) {
    return this.getPlayers('merode')
               .then(players => players.filter(player => player.id === id)[0]);
  }

  
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
