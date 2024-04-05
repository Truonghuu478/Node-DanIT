
const express = require('express')
require('dotenv').config()
const port  = 8080 
const hostName  = 'localhost' 
const app = express()


app.get('/',(req,res)=>{
    res.send("Hello Express")
})

app.get('/hello',(req,res)=>{
    res.send("Hello ")
})

app.get('/hihi',(req,res)=>{
    res.send("hihi ")
})

app.listen(port,hostName,()=>{
    console.log(`run server port : ${process.env.PORT}`);
})