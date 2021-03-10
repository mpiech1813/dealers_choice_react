const router = require('express').Router();
const { Xenomorph, Media } = require('../db/Models');

router.get('/:id', async (req, res, next) => {
  try {
    const idNum = req.params.id;
    const alien = await Xenomorph.findByPk(idNum, {
      include: [Media],
    });
    res.send(alien);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
