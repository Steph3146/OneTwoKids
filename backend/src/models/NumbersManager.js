const AbstractManager = require("./AbstractManager");

class NumbersManager extends AbstractManager {
  constructor() {
    super({ table: "numbers" });
  }

  insert(numbers) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      numbers.title,
    ]);
  }

  readForNumbers(numbers) {
    return this.database.query(`select * from ${this.table} where id = ?;`, [
      numbers.id,
    ]);
  }

  update(numbers) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [numbers.title, numbers.id]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = NumbersManager;
