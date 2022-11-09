const { books } = require("../data/book");

const getBooks = (req, res) => {
  res.status(200).json({ success: true, data: books });
};

const postBook = (req, res) => {
  const { name, author } = req.body;

  if (!name || !author) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  // We don't actually post anything on our database
  res.status(201).send({ success: true, book: { name: name, author: author } });
};

const getBookById = (req, res) => {
  const { id } = req.params;

  const book = books.find((book) => book.id === Number(id));

  if (typeof book === "undefined") {
    return res
      .status(404)
      .json({ success: false, msg: `No book with id ${id}` });
  }

  res.status(200).json({ success: true, data: book });
};

const putBookById = (req, res) => {
  const { id } = req.params;
  const { name, author } = req.body;

  const book = books.find((book) => book.id === Number(id));

  if (typeof book === "undefined") {
    return res
      .status(404)
      .json({ success: false, msg: `No book with id ${id}` });
  }

  const newBooks = books.map((book) => {
    if (book.id === Number(id)) {
      book.name = typeof name === "undefined" ? book.name : name;
      book.author = typeof author === "undefined" ? book.author : author;
    }
    return book;
  });

  res.status(200).json({ success: true, data: newBooks });
};

const deleteBookById = (req, res) => {
  const { id } = req.params;

  const book = books.find((book) => book.id === Number(id));

  if (typeof book === "undefined") {
    return res
      .status(404)
      .json({ success: false, msg: `No book with id ${id}` });
  }

  // Since we use 'filter', we dont actually delete anything
  const newBooks = books.filter((book) => book.id !== Number(id));
  res.status(200).json({ success: true, data: newBooks });
};

module.exports = {
  getBooks,
  postBook,
  getBookById,
  putBookById,
  deleteBookById,
};
