const express = require("express");
const loginRouter = express.Router();

function router(nav) {
  var nav = [
    { link: "/login", name: "Login" },
    { link: "/signup", name: "Sign-up" },
  ];
  loginRouter.get("/", function (req, res) {
    res.render("login", { nav, title: "Login" });
  });

  return loginRouter;
}

module.exports = router;
