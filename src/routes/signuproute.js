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

  return signupRouter;
}

module.exports = router;
