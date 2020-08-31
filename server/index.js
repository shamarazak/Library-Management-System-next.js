const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
var cors = require("cors");
app.use(cors());

// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library",
});

//connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

//show all books
app.get("/api/books", (req, res) => {
  let sql = "SELECT * FROM book";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

// show all students
app.get("/api/students", (req, res) => {
  let sql = "SELECT * FROM student";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//  add book
app.post("/api/books", (req, res) => {
  let data = {
    book_id: req.body.book_id,
    name: req.body.name,
    author: req.body.author,
  };
  let sql = "INSERT INTO book SET ?";
  conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

// Assign books to students
app.post("/api/assignbook", (req, res) => {
  let data = {
    book_id: req.body.book_id,
    studentid:req.body.studentid
  };
  let sql = "INSERT INTO assign SET ?";
  conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});
// Registration
app.post("/api/registration", (req, res) => {
  let data = {
    name: req.body.name,
    studentid: req.body.studentid,
    email: req.body.email,
    password: req.body.password,
  };
  let sql = "INSERT INTO registration SET ?";
  conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });

  

});

//Server listening
app.listen(3001, () => {
  console.log("Server started on port 3001...");
});
