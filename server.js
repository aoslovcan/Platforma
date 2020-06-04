const express = require('express');

var bodyParser = require('body-parser');

const mysql = require('mysql');

var cors = require('cors');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user : 'root',
    password : '',
    database : 'reactdb'
})

//Connect



db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL Connected');
})

const server = express();

server.listen('3001', () => {
    console.log('Server started on port 3001');
})

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// aprove connection to server
server.use(cors());

server.get('/devices', function (req, res) {

    
    db.query('select * from devices', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });

 server.post('/delete',  function(req, res) {
    data = req.body;

    console.log(data);

   var sql = 'DELETE FROM  devices WHERE devices_id = '+data.id+'';

    //var sql = "INSERT INTO devices(name, price) VALUES('"+ data.name +" ',' "+ data.price +")";

   //var sql = "INSERT INTO devices (name, price, description) VALUES ('Company Inc', 500, 'Highway 37')";
 db.query(sql,  function (err, result) {
   if (err) throw err;
   console.log("Deleted row");
  
 });


  /* var sql ="INSERT INTO devices(name, price, description) VALUES('proizvod', 560, 'opis')"
    db.query(sql, function (err, rows, fields) {
       if (err) throw err
       console.log("succses");

    
   });*/


});


 server.post('/new',  function(req, res) {
     data = req.body;

     

     console.log(data.name + ' ' + data.price + ' ' + data.description);

     var sql = "INSERT INTO devices(name, price, description, image) VALUES('"+ data.name +" ',' "+ data.price +" ',' "+ data.description +" ',' "+ data.image +"')";

     //var sql = "INSERT INTO devices(name, price) VALUES('"+ data.name +" ',' "+ data.price +")";

    //var sql = "INSERT INTO devices (name, price, description) VALUES ('Company Inc', 500, 'Highway 37')";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
   
  });
  window.location.href = 'http://localhost:3000/productlist';
   /* var sql ="INSERT INTO devices(name, price, description) VALUES('proizvod', 560, 'opis')"
     db.query(sql, function (err, rows, fields) {
        if (err) throw err
        console.log("succses");

     
    });*/


});





