import Database from './database';

export default class User {
  userId = 0;
  userName = '';
  constructor(private database: Database) {}

  saveUser() {
    if (this.userId) {
      this.database.saveUser(this);
    }
  }
}
