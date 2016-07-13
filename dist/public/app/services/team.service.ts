import { Player } from '../model/player/player';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UrlHelper } from './url.helper';

@Injectable()
export class TeamService {

  private url:string;
  private suffix = '/api/player';  // URL to web api
  constructor(private http: Http, private urlHelper:UrlHelper) { 
      this.url = this.urlHelper.GetUrl(this.suffix);
  }

  getPlayers(teamName:string):Promise<Player[]>{
    return this.http.get(this.url)
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
