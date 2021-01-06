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
  loginRouter.post("/login-done", function (req, res) {
    res.redirect("/home");
  });

  return loginRouter;
}

module.exports = router;
