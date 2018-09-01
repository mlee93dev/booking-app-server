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

  it('should remove a user', () => {
    let id = '1';

    dummyUsers.removeUser(id);

    expect(dummyUsers.users.length).toEqual(1);
  });

  it('should find a user', () => {
    let testUser = {
      id: '2'
    };

    let foundUser = dummyUsers.getUser(testUser.id);

    expect(foundUser.id).toEqual(testUser.id);
  })
});