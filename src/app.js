const express = require("express");
const compression = require("compression");
const app = express();

const morgan = require("morgan");

const home = require("./routes/home");
const login = require("./routes/login");
const book = require("./routes/book");

// greatly dec size of response body => increase speed
app.use(compression());

// parse static assets
app.use(express.static("./public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json, handling json from req
app.use(express.json());

// logging response
app.use(morgan("tiny"));

// base path
app.use("/api/books", book);
app.use("/login", login);
app.use("/", home);

app.listen(8000, () => {
  console.log("Server is listening on port 8000...");
});

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "/test");

// fs.mkdirSync(dirPath);

// console.log(__dirname);
// console.log(process.cwd());
