const {getBook, postBook, getBooks, updateBook, deleteBook} = require("../controllers/bookController");

let bookRouter= require("express").Router()

bookRouter.post("/",postBook);
bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete('/:id', deleteBook);

module.exports= bookRouter;