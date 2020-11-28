const express = require("express");
const urlRoutes = express.Router();

const controller = require("../controllers/url.controller");

urlRoutes.get("/", (req, res) => {
  res.send("hello word");
});

urlRoutes.get("/:slug", controller.getUrl);

urlRoutes.post("/new", controller.postUrl);

module.exports = urlRoutes;
