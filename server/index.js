const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
var cors = require('cors')
app.use(cors());
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'library'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all books
app.get('/api/books',(req, res) => {
  let sql = "SELECT * FROM book";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
//  add book
  app.post('/api/addbooks',(req, res) => {
    let data = {book_id: req.body.book_id, name: req.body.name,author: req.body.author};
    let sql = "INSERT INTO book SET ?";
     conn.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
});

//Server listening
app.listen(3001,() =>{
  console.log('Server started on port 3001...');
});