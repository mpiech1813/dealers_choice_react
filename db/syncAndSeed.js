const db = require('./db');
const { Xenomorph, Media } = require('./Models');

const syncAndSeed = async () => {
  await db.sync({ force: true });

  // populate Media model
  const [books, comics, movies, games] = await Promise.all(
    ['Books', 'Comics', 'Movies', 'Games'].map((name) => {
      Media.create({ name });
    })
  );

  // aliens
  const egg = await Xenomorph.create({
    name: 'Egg',
    growth: 'Pre-life',
    size: 'Medium',
    ability: 'Detect lifeforms and store Facehuggers indefinitely',
    mediumId: 2,
  });

  const facehugger = await Xenomorph.create({
    name: 'Facehugger',
    growth: 'Young',
    size: 'Small',
    ability: 'Wall-walking, acid-blood, enviromental adaption',
    mediumId: 3,
  });

  const drone = await Xenomorph.create({
    name: 'Drone',
    growth: 'Adult',
    size: 'Large',
    ability: 'Wall-walking, hive building, acid-blood',
    mediumId: 3,
  });

  const warrior = await Xenomorph.create({
    name: 'Warrior Drone',
    growth: 'Adult',
    size: 'Large',
    ability: 'Wall-walking, cunning, acid-blood',
    mediumId: 3,
  });

  const runner = await Xenomorph.create({
    name: 'Runner Alien',
    growth: 'Adult',
    size: 'Medium-Large',
    ability: 'Wall-walking, speed, acid-blood, quadrupedal',
    mediumId: 3,
  });

  const pretorian = await Xenomorph.create({
    name: 'Pretorian',
    growth: 'Adult',
    size: 'Huge',
    ability: 'Brute strength, acid-blood',
    mediumId: 4,
  });

  const queen = await Xenomorph.create({
    name: 'Queen',
    growth: 'Adult',
    size: 'Huge',
    ability: 'Egg-laying, superior inteligence, acid-blood',
    mediumId: 3,
  });

  const predalien = await Xenomorph.create({
    name: 'Predalien',
    growth: 'Adult',
    size: 'Large',
    ability: 'Strength, acid-blood',
    mediumId: 4,
  });

  const chestburster = await Xenomorph.create({
    name: 'Chestburster',
    growth: 'Young',
    size: 'Small',
    ability: 'Hunger, acid-blood, no legs',
    mediumId: 3,
  });

  const bull = await Xenomorph.create({
    name: 'Bull Alien',
    growth: 'Adult',
    size: 'Large',
    ability: 'Charge ability, horns, acid-blood, quadrupedal',
    mediumId: 2,
  });

  const scorpion = await Xenomorph.create({
    name: 'Scorpion Alien',
    growth: 'Adult',
    size: 'Large',
    ability: 'Stinger tail, explodes when killed, acid-blood',
    mediumId: 2,
  });

  const mantis = await Xenomorph.create({
    name: 'Mantis Alien',
    growth: 'Adult',
    size: 'Large',
    ability: 'Mantis like talons, extreme jump, acid-blood',
    mediumId: 2,
  });

  const necromorph = await Xenomorph.create({
    name: 'Necromorph',
    growth: 'Adult',
    size: 'Large',
    ability: 'Spreads necrosis desease, acid-blood',
    mediumId: 1,
  });
};

module.exports = syncAndSeed;
