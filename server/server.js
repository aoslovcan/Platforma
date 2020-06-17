const express = require('express');

var bodyParser = require('body-parser');

const mysql = require('mysql');

var cors = require('cors');

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'reactdb'
})

//Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected');
})

//Server create
const server = express();

server.listen('3001', () => {
  console.log('Server started on port 3001');
})

//Include json 

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// aprove connection to server
server.use(cors());

//Select all
server.get('/devices', function (req, res) {


  db.query('select * from devices', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});

//Select by id
server.get('/devices/:id', function (req, res) {

  data = req.body;
  console.log('Request URL:', req.originalUrl);
  console.log('Request URL:', req.params.id);

  db.query('select * from devices WHERE devices_id = ' + req.params.id + ' ', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
    console.log('Uspješno');
  });
});


// Delete by id
server.post('/delete', function (req, res) {
  data = req.body;

  console.log(data);

  var sql = 'DELETE FROM  devices WHERE devices_id = ' + data.id + '';

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Deleted row");

  });
});

// Update
server.post('/update', function (req, res) {
  data = req.body;

  console.log(data);

  var sql = "UPDATE devices SET name='" + data.name + "', price='" + data.price + "' , image='" + data.image + "' , description='" + data.description + "' WHERE devices_id = '" + data.id + "'";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Row updated");

  });
  window.location.href = 'http://localhost:3000/productlist';

});



server.post('/new', function (req, res) {
  data = req.body;

  console.log(data.name + ' ' + data.price + ' ' + data.description);

  var sql = "INSERT INTO devices(name, price, description, image) VALUES('" + data.name + " ',' " + data.price + " ',' " + data.description + " ',' " + data.image + "')";

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");

  });
  window.location.href = 'http://localhost:3000/productlist';

});





