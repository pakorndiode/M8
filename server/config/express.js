const express = require("express");
const connect = require("./configDB");
const app = express();

app.get("/createMenu",[],(req, res) => {
    sql = "INSERT INTO food () VALUES (?)"
    connect.query(sql,[],(err, result) => {
        if (err) throw err

        return res.status(200).json(result);
    });
});

app.get("/Home", (req, res) => {
    sql = " SELECT * FROM food"
    connect.query(sql, (err, result) => {
        if (err) throw err

        return res.status(200).json(result);
    });
});


module.exports = (x)=>{
    app.listen(x, () => {
        console.log(`App running in port ${x}`);
    });
};
