const mysql = require("mysql2");

 const connect = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database: "m8p",
 });
 connect.connect((err) => {
     if (err) throw err
 });

module.exports = connect

