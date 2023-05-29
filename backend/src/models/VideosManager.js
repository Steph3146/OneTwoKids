const AbstractManager = require("./AbstractManager");

class VideosManager extends AbstractManager {
  constructor() {
    super({ table: "videos" });
  }

  insert(videos) {
    return this.connection.query(
      `insert into ${this.table}(video_name, video_url) values (?, ?);`,
      [videos.name, videos.url]
    );
  }

  readVideo(videos) {
    return this.connection.query(
      `select * from ${this.table} where video_name = ?;`,
      [videos.name]
    );
  }

  update(videos) {
    return this.connection.query(
      `update ${this.table} set video_name = ?, video_url = ? , where video_id = ?`,
      [videos.name, videos.url]
    );
  }

  delete(id) {
    return this.connection.query(
      `delete from ${this.table} where video_id = ?`,
      [id]
    );
  }
}

module.exports = VideosManager;
