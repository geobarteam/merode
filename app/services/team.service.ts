import { Injectable } from '@angular/core';
import { PLAYERS } from './mock-players'
import { Player } from '../model/player'

@Injectable()
export class TeamService {
    getPlayers(teamName:string):Promise<Player[]>{
        return Promise.resolve(PLAYERS);
    }
}
