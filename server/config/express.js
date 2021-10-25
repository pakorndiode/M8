const express = require("express");
const app = express();



module.exports = () =>{
    app.listen(5000, () => {
        console.log("App running in port 5000");
    })
}
