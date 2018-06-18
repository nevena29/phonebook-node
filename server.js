

// server.js
const mysql = require('mysql');

// creating connection to the db
const con = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'project_adressbook',

});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    console.log(err);
    
    return;
  }
  console.log('Connection established');
});


con.query('SELECT * FROM adress_book', (err,rows) => {
//  if(err) throw err

  console.log('Data received from Db:\n');
  console.log(rows);
});



con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});

