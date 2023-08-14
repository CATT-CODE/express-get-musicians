const { Band, Musician } = require('../../models');

const router = require('express').Router();


router.get('/band/:num', async (req, res) => {
    const num = parseInt(req.params.num);

    let band = await Band.findOne({
        offset: num - 1,
        include: [Musician]
    });

    if (!band) {
        return res.status(404).json({ error: 'Band not found' });
    }
    res.send(band);
});

router.get('/bands', async (req, res) => {
    let bands = await Band.findAll();

    res.json(bands);
});

module.exports = router