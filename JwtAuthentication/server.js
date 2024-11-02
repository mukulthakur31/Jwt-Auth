const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const {Signup,Login,getall} = require('./function')
const {verifyToken} = require('./Jwtauth')
const cors = require('cors')

const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/jwtauthentication')
.then(()=>{
    console.log("database connected");
})
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.post('/signup',Signup)
app.post('/login',Login)
app.get('/all',verifyToken,getall)
app.get('/getdata',(req,res)=>{
    res.send('hello')
})

app.listen(3000,()=>{
    console.log('server connected');
})