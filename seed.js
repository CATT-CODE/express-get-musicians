const { Musician, Band } = require("./models/index")
const { db } = require("./db/connection");
const { seedMusician, seedBand } = require("./seedData");

const syncSeed = async () => {
    await db.sync({force: true});
    seedMusician.map(musician => Musician.create(musician));
    seedBand.map(band => Band.create(band));
    let band = await Band.findByPk(1)
    console.log(band);
    let musician = await Musician.findByPk(1)
    console.log(musician);
    await band.addMusician(musician);
    console.log(await band.getMusicians());
}

syncSeed();
