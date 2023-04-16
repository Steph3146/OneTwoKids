const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password) values (?, ?, ?, ?)`,
      [users.firstname, users.lastname, users.email, users.hashedPassword]
    );
  }

  readForLogin(users) {
    return this.database.query(`select * from ${this.table} where email = ?;`, [
      users.email,
    ]);
  }

  update(users) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [users.title, users.id]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = UsersManager;
