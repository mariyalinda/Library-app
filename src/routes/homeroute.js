const express = require("express");
const homeRouter = express.Router();

function router(nav) {
  homeRouter.get("/", function (req, res) {
    var nav = [
      { link: "/login", name: "Login" },
      { link: "/signup", name: "Sign-up" },
    ];
    res.render("welcome", {
      nav,
      title: "Library",
    });
  });
  homeRouter.get("/home", function (req, res) {
    res.render("index", {
      nav,
      title: "Library",
    });
  });

  return homeRouter;
}

module.exports = router;
