const { Musician } = require('../../models');

const router = require('express').Router();

router.get('/musician/:num', async (req, res) => {
    const num = parseInt(req.params.num);

    let musician = await Musician.findOne({
        offset: num - 1
    });

    if (!musician) {
        return res.status(404).json({ error: 'Musician not found' });
    }

    res.json(musician);
})

router.get('/musicians', async (req, res) => {
    let musicians = await Musician.findAll()

    res.json(musicians)
})

module.exports = router