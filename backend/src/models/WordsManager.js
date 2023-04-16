const AbstractManager = require("./AbstractManager");

class WordsManager extends AbstractManager {
  constructor() {
    super({ table: "words" });
  }

  insert(words) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      words.title,
    ]);
  }

  update(words) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [words.title, words.id]
    );
  }
}

module.exports = WordsManager;
