import { Player } from './player';

describe('Player', () => {
  it('has name', () => {
    let player:Player = {name: 'Geoffrey'};
    expect(player.name).toEqual('Geoffrey');
  });
 
});