const express = require('express');
const app =  express();
const port =process.env.PORT || 8080;
const path = require('path')
const userRouter = require('./userRoutes')
const mongoose = require('mongoose')
const http = require('http').createServer()
const uri = "mongodb+srv://Ashish:9540%40%23%2AAshish@cluster0.tejpe.mongodb.net/indianPerimiunLeague?retryWrites=true&w=majority";

app.use(express.json())
app.use(userRouter)

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log('Database connected')})
.catch((err)=>{console.log('Database connection failed',err)})

app.listen(port,()=>{console.log('port started at 8080 :) ')})

let codes = `<div class="teams" id="SOMETHING"  style="background:"SOMETHING";border:"SOMETHING"">
    <a href="teamdetails?id="SOMETHING"" id="SOMETHING">
        <img src="SOMETHING" alt="teamLogo" id="SOMETHING">
        <h5>SOMETHING</h5>
        <p>SOMETHING</p>
        <div> <i class="fa-solid fa-trophy"></i>SOMETHING </div>
    </a>
</div>`

app.get('',(req,res)=>{res.sendFile(path.join(__dirname,"../views/index.html"))})
app.get('/teamdetails',(req,res)=>{res.sendFile(path.join(__dirname,"../views/teamdetails.html"))})
app.get('/player-page',(req,res)=>{res.sendFile(path.join(__dirname,"../views/player-page.html"))})
app.get('/AdminPage',(req,res)=>{res.render("<h1>Admin PAge</h1>")})

app.get('*',(req,res)=>{res.send("<h1>oops didn't found your request! </h1>")})
