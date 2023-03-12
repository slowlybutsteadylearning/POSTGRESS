require("dotenv").config()
const express = require("express");
const userRoute = require("./route/userroute")
const app = express();
const db = require("./model/index")


app.use(express.json())
db.sequelize.sync().then(()=>{
    console.log("Drop and Resync Db");
    console.log("Connected to database");
    })
    .catch((err) =>{
        console.log(err);
    });

    
app.use(userRoute)
port=process.env.PORT
app.listen(port, ()=>{
    console.log("Up and runing 🚀🚀🚀🚀")
})