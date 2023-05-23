const axios = require("axios");

const { API_KEY } = process.env;

const models = require("../models");

const browse = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/key=${API_KEY}`
    );
    response.data.message = "Liste des films";
    response.status(200).json(response.data);
    // console.log(response.data)
  } catch (error) {
    console.error("Video not found");
  }
};

const read = (req, res) => {
  models.videos
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const videos = req.body;

  // TODO validations (length, format...)

  videos.id = parseInt(req.params.id, 10);

  models.videos
    .update(videos)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const videos = req.body;

  // TODO validations (length, format...)

  models.videos
    .insert(videos)
    .then(([result]) => {
      res.location(`/videos/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.videos
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
