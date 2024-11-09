const express = require('express');
const mysql = require('mysql2');

const app = express();

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'db', // Use the service name defined in docker-compose.yml
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
