const router = require('express').Router();
const { Xenomorph, Media } = require('../db/Models');

router.get('/', async (req, res, next) => {
  try {
    const list = await Media.findAll({
      include: [Xenomorph],
    });
    res.send(list);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
