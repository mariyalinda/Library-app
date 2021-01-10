const express = require("express");
const booksRouter = express.Router();

function router(nav, books) {
  booksRouter.get("/", function (req, res) {
    res.render("books", {
      nav,
      title: "Books",
      books,
    });
  });

  booksRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("book", {
      nav,
      title: "Library",
      book: books[id],
    });
  });

  return booksRouter;
}

module.exports = router;
