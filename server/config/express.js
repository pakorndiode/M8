const express = require("express");
const connect = require("./configDB");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

app.post("/createMenu",(req, res) => {
    const name = req.body.name;
    const nationality = req.body.nationality;
    const type = req.body.type;
    const description = req.body.description;
    const calorie = req.body.calorie;
    const price = req.body.price;
    const image = req.body.image
    
    sql = "INSERT INTO food (type_id,name,nationality,description,calorie,price,image) VALUES (?,?,?,?,?,?,?)"
    connect.query(sql,[type,name,nationality,description,calorie,price,image],(err, result) => {
        if (err) throw err

        return res.status(200).json({
            message:`Create menu ${name} success`
        });
    });
});

app.get("/Home", (req, res) => {
    sql = "SELECT * FROM food INNER JOIN typeoffood ON food.type_id = typeoffood.Type_id"
    connect.query(sql, (err, result) => {
        if (err) throw err

        return res.status(200).json(result);
    });
});

app.get("/filterNationality",(req,res)=>{
    sql = "SELECT nationality FROM food"
    connect.query(sql,(err,result) => {
        if(err) throw err

        return res.status(200).json(result)
    })
})

app.get("/filter/Nationality/:nationality", (req, res) => {
    const nationality = req.params.nationality
    sql = "SELECT * FROM food WHERE nationality = ?"
    connect.query(sql,[nationality],(err,result) => {
        if(err) throw err

        return res.status(200).json(result)
    })
})


module.exports = (x)=>{
    app.listen(x, () => {
        console.log(`App running in port ${x}`);
    });
};
