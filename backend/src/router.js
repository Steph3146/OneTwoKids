const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");
const videosControllers = require("./controllers/videosControllers");
const animalsControllers = require("./controllers/animalsControllers");
const numbersControllers = require("./controllers/numbersControllers");

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);
router.delete("/users/:id", usersControllers.destroy);

router.get("/videos", videosControllers.browse);
router.get("/videos/:id", videosControllers.read);
router.put("/videos/:id", videosControllers.edit);
router.post("/videos", videosControllers.add);
router.delete("/videos/:id", videosControllers.destroy);

router.get("/animals", animalsControllers.browse);
router.get("/animals/:id", animalsControllers.read);
router.put("/animals/:id", animalsControllers.edit);
router.post("/animals", animalsControllers.add);
router.delete("/animals/:id", animalsControllers.destroy);

router.get("/numbers", numbersControllers.browse);
router.get("/numbers/:id", numbersControllers.read);
router.put("/numbers/:id", numbersControllers.edit);
router.post("/numbers", numbersControllers.add);
router.delete("/numbers/:id", numbersControllers.destroy);

module.exports = router;
