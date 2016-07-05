import { User } from './user';

describe('User', () => {
  it('has password', () => {
    let user: User = {email: 'gvd8@hotmail.com', password: 'SuperCat'};
    expect(user.password).toEqual('SuperCat');
  });
  it('has email', () => {
    let user: User = {email: 'gvd8@hotmail.com', password: 'SuperCat'};
    expect(user.email).toEqual('gvd8@hotmail.com');
  });
});
