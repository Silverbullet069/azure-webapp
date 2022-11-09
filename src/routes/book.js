const express = require("express");
const router = express.Router();

const {
  getBooks,
  postBook,
  getBookById,
  putBookById,
  deleteBookById,
} = require("../controllers/book");

// remember, exist base path before these route url
router.get("/", getBooks);
router.post("/", postBook);
router.get("/:id", getBookById);
router.put("/:id", putBookById);
router.delete("/:id", deleteBookById);

module.exports = router;
