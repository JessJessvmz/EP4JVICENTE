const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123', 
  database: 'ep4database'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Base de datos conectada');
});

module.exports = connection;