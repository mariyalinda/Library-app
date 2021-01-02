const express = require("express");
const booksRouter = express.Router();

function router(nav) {
  var books = [
    {
      title: "Little Women",
      author: "Louisa May Alcott",
      genre: "Classic",
      img: "littlewomen.png",
      about:
        "Little Women is a coming-of-age novel written by American novelist Louisa May Alcott (1832–1888) which was originally published in two volumes in 1868 and 1869. Alcott wrote the book over several months at the request of her publisher. The story follows the lives of the four March sisters—Meg, Jo, Beth, and Amy—and details their passage from childhood to womanhood. It is loosely based on the lives of the author and her three sisters. Little Women was an immediate commercial and critical success, with readers demanding to know more about the characters. Alcott quickly completed a second volume, and it was also successful. The two volumes were issued in 1880 as a single novel titled Little Women. As proof of its popularity even now, it has been made into a hugely successful movie",
    },
    {
      title: "Harry Potter",
      author: "J K Rowling",
      genre: "Fantasy",
      img: "harry.jpg",
      about:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).",
    },
    {
      title: "The cat in the hat",
      author: "Dr.Suess",
      genre: "Children",
      img: "cat.jpg",
      about:
        "The Cat in the Hat is a 1957 children's book written and illustrated by the American author Theodor Geisel, using the pen name Dr. Seuss. The story centers on a tall anthropomorphic cat who wears a red and white-striped hat and a red bow tie. ",
    },
  ];

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
  booksRouter.post("/", function (req, res) {
    res.render("books", { nav, title: "Books", books });
    res.end();
  });
  return booksRouter;
}

module.exports = router;
