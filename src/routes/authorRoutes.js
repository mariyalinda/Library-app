const express = require("express");
const authorRouter = express.Router();

function router(nav) {
  var authors = [
    {
      name: "Louisa May Alcott",
      place: "USA",
      genre: "Classic",
      img: "louisa.jpg",
      about:
        "Louisa May Alcott (November 29, 1832 – March 6, 1888) was an American novelist, short story writer and poet best known as the author of the novel Little Women (1868) and its sequels Little Men (1871) and Jo's Boys (1886). Raised in New England by her transcendentalist parents, Abigail May and Amos Bronson Alcott, she grew up among many of the well-known intellectuals of the day, such as Ralph Waldo Emerson, Nathaniel Hawthorne, Henry David Thoreau, and Henry Wadsworth Longfellow.",
    },
    {
      name: "J K Rowling",
      place: "UK",
      genre: "Fantasy",
      img: "jkr.jpg",
      about:
        "J. K. Rowling is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.Born in Yate, Gloucestershire, Rowling was working as a researcher and bilingual secretary for Amnesty International when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London in 1990. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films. She also writes crime fiction under the pen name Robert Galbraith.",
    },
    {
      name: "Dr. Suess",
      place: "USA",
      genre: "Children",
      img: "drsuess.jpg",
      about:
        "Theodor Seuss Ted Geisel (March 2, 1904 – September 24, 1991) was an American children's author, political cartoonist, illustrator, poet, animator, and filmmaker. He is known for his work writing and illustrating more than 60 books under the pen name Dr. Seuss. His work includes many of the most popular children's books of all time, selling over 600 million copies and being translated into more than 20 languages by the time of his death.",
    },
  ];

  authorRouter.get("/", function (req, res) {
    res.render("authors", {
      nav,
      title: "Authors",
      authors,
    });
  });

  authorRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("author", {
      nav,
      title: "Author",
      author: authors[id],
    });
  });
  return authorRouter;
}

module.exports = router;
