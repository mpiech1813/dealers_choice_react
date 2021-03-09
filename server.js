const express = require('express');
const path = require('path');
const syncAndSeed = require('./db/syncAndSeed');
const { Xenomorph, Media } = require('./db/Models');

const app = express();
const { static } = express;

app.use('/public', static(path.join(__dirname, './public')));

app.get('/', async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, './public/index.html'));
  } catch (error) {
    console.log(error);
  }
});

app.get('/aliens', async (req, res, next) => {
  try {
    const list = await Xenomorph.findAll();
    res.send(list);
  } catch (error) {
    console.log(error);
  }
});

const run = async () => {
  try {
    await syncAndSeed();

    const PORT = process.env.PORT || 1813;
    app.listen(PORT, () => console.log(`app listening on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

run();
