
// require for mysql server to work
const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());




// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'Waters000',
      // Your MySQL password
      password: 'Hilton32!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );



/// test e,xpress.js connection with GET
// app.get('/', (req, res) => {
//     res.json({
//         message: "hello world"
//     });
// });



db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });


// Catch all route, default response for any other request not found - Always use at end
app.use((req, res) => {
    res.status(404).end();
  });





app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});