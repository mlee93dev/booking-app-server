class Users {
  constructor() {
    this.users = [];
  }

  addUser(id) {
    console.log(id);
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

  getUser(id) {
    let user = this.users.find((user) => user.id === id);
    if (user) {
      return user;
    }
    return false;
  }

}

module.exports = {Users};