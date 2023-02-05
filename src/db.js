// db.js
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'shrey',
  password: 'abc',
  database: 'lab2db'
});

// client.connect()
//   .then(() => console.log('Connected to PostgreSQL'))
//   .catch(err => console.error('Connection error', err.stack));

// client.query('SELECT * FROM teaches', (err, res) => {
//     if(!err)
//     {
//         console.log(res.rows);
//     }
//     else
//     {
//         console.log(err.message);
//     }
// });
module.exports = client;