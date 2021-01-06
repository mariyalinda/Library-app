const express = require("express");
const signupRouter = express.Router();

function router(nav) {
  var nav = [
    { link: "/login", name: "Login" },
    { link: "/signup", name: "Sign-up" },
  ];
  signupRouter.get("/", function (req, res) {
    res.render("signup", { nav, title: "Signup" });
  });
  signupRouter.post("/signup-done", function (req, res) {
    res.redirect("/home");
  });

  return signupRouter;
}

module.exports = router;
