const router = require('express').Router();
const { Xenomorph, Media } = require('../db/Models');

router.use('/aliens', require('./aliens'));
router.use('/media', require('./media'));
router.use('/id', require('./detail'));

module.exports = router;
