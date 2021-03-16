const aliensRouter = require('express').Router();
const { Xenomorph, Media } = require('../db/Models');

aliensRouter.get('/', async (req, res, next) => {
  try {
    const list = await Xenomorph.findAll({
      include: [Media],
    });
    res.send(list);
  } catch (error) {
    next(error);
  }
});

aliensRouter.post('/', async (req, res, next) => {
  try {
    const { name, age, size, spec } = req.body;
    const newAlien = await Xenomorph.create({
      name,
      growth: age,
      size,
      ability: spec,
    });
    res.status(201).send(newAlien);
  } catch (error) {
    next(error);
  }
});

// create delete

module.exports = aliensRouter;
