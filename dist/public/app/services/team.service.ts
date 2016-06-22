import { IPlayer } from '../model/IPlayer';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeamService {

  private heroesUrl = '/api/player';  // URL to web api

  private listeUrl = "http://localhost:8000";
  constructor(private http: Http) { 
    if (window.location.href.startsWith(this.listeUrl)){
      this.heroesUrl = "http://localhost:3000" + this.heroesUrl;
    }
  }

  getPlayers(teamName:string):Promise<IPlayer[]>{
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getPlayer(name: string) {
    return this.getPlayers('merode')
               .then(players => players.filter(player => player.name === name)[0]);
  }

  
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
