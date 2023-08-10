const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get('/musician/:num', async (req, res) => {
    const num = parseInt(req.params.num);

    if (isNaN(num) || num <= 0) {
        return res.status(400).json({ error: 'Invalid number provided' });
    }

    let musician = await Musician.findOne({
        offset: num - 1
    });

    if (!musician) {
        return res.status(404).json({ error: 'Musician not found' });
    }

    res.json(musician);
})

app.get('/musicians', async (req, res) => {
    let musicians = await Musician.findAll()

    res.json(musicians)
})




module.exports = app;