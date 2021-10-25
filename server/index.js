const app = require("./config/express");
const connect = require("./config/configDB");

app.get("/",(res)=>{
    const sql = "SELECT * FROM food"
    connect.query(sql,(error,result)=>{
        if(error) throw error

        return res.status(200).json(result)
    })
});



app();