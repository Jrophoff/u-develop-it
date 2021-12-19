const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'bRLGUc-ly$t4?Yu0E#!U',
        database: 'election'
    },
    console.log('Connected to the elction database.')
);

module.exports = db;