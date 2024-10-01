require('dotenv').config();
const express=require('express');
const Router =require('./routes/index');
const bodyParser = require('body-parser');
const passport = require('passport');
const session=require('express-session')


const app=express();


const port=process.env.port || 3000;
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended:false}));
// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json())

app.use('/admin',Router.adminRouter)

app.listen(port,()=>console.log(`server is lisrening at port number ${port}`))