const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const chefs_detail = require('./data/chefs_data.json');

app.get('/' , (req,res) => {
    res.send("Port is started successfully");
})

app.get('/chefs' , (req,res) => {
    res.send(chefs_detail);
})

app.listen(port , ()=>{
    console.log("port is running in google render page ");
} )