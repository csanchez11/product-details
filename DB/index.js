const mysql = require('mysql');

const connection = mysql.createConnection({
  user     : 'root',
  password : 'chris',
  database : 'productDetails'
});

connection.connect();

module.exports = connection;