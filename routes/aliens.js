const aliensRouter = require('express').Router();
const { Xenomorph, Media } = require('../db/Models');

aliensRouter.get('/', async (req, res, next) => {
  try {
    const list = await Xenomorph.findAll({
      include: [Media],
    });
    res.send(list);
  } catch (error) {
    console.log(error);
  }
});

aliensRouter.post('/', async (req, res, next) => {
  try {
    const newAlien = await Xenomorph.create({});
  } catch (error) {
    console.log(error);
  }
});

module.exports = aliensRouter;
