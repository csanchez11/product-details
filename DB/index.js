const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'productDetails',
});

connection.connect();

module.exports = connection;
