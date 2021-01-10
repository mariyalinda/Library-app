const express = require("express");
const addRouter = express.Router();

function router(nav, books) {
  addRouter.get("/", function (req, res) {
    res.render("addbook", { nav, title: "Add" });
  });
  addRouter.post("/add", function (req, res) {
    var item = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      img: req.body.image,
      about: req.body.about,
    };
    books.push(item);
    res.redirect("/books");
  });

  return addRouter;
}

module.exports = router;
