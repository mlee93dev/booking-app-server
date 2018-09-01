let expect = require('expect');

let {Users} = require('./users');

describe('Users', () => {
  let dummyUsers;

  beforeEach(() => {
    dummyUsers = new Users();
    dummyUsers.users = [{
      id: '1'
    },{
      id: '2'
    }];
  });

  it('should add a new user', () => {
    let newUsers = new Users();
    let user = {
      id: 'kewl'
    };
    newUsers.addUser(user.id);

    expect(newUsers.users).toEqual([user]);
  });
});