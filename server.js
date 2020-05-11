const express = require('express');

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
    console.log('Server started on port 3000');
})

// aprove connection to server
server.use(cors());

server.get('/devices', function (req, res) {
    db.query('select * from devices', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
     



