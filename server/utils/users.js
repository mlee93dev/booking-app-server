class Users {
  constructor() {
    this.users = [];
  }

  addUser(id) {
    let user = {id};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    let user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
      return user;
    }
  }

}

module.exports = {Users};