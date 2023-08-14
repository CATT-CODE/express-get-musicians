const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const bandRouter = require('./routes/bandRouter')
const musicianRouter = require('./routes/musicianRouter')
const { db } = require("../db/connection")

const port = 3000;

app.use(express.json())
//TODO: Create a GET /musicians route to return all musicians 

app.use('/b', bandRouter)
app.use('/m', musicianRouter)


module.exports = app;