export default class Admin {
  constructor(user) {
    this.user = user;
  }

  // Return a list of all users in an audience
  listUsers(aud) {
    throw new Error("This operation is not supported")
  }

  getUser(user) {
    throw new Error("This operation is not supported")
  }

  updateUser(user, attributes = {}) {
    throw new Error("This operation is not supported")
  }

  createUser(email, password, attributes = {}) {
    throw new Error("This operation is not supported")
  }

  deleteUser(user) {
    throw new Error("This operation is not supported")
  }
}
