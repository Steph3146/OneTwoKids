const AbstractManager = require("./AbstractManager");

class VideosManager extends AbstractManager {
  constructor() {
    super({ table: "numbers" });
  }

  insert(videos) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      videos.title,
    ]);
  }

  readForVideo(videos) {
    return this.database.query(`select * from ${this.table} where id = ?;`, [
      videos.id,
    ]);
  }

  update(videos) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [videos.title, videos.id]
    );
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = VideosManager;
