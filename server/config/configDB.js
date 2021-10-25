const mysql = require("mysql2");

module.exports = () =>{
    const connect = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "m8p",
    });

    connect.connect((err) => {
        if (err) throw err
    })

}

