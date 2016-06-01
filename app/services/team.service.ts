import { Injectable } from '@angular/core';
import { PLAYERS } from './mock-players'
import { Player } from '../team/player'

@Injectable()
export class TeamService {
    getPlayers(teamName:string):Player[]{
        return PLAYERS;
    }
}
