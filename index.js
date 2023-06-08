const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/' , (req,res) => {
    res.send("Port is started successfully");
})

app.listen(port , ()=>{
    console.log("port is running in google render page ");
} )