const express = require('express');
const path = require('path');
const syncAndSeed = require('./db/syncAndSeed');

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

app.use('/api', require('./routes/index'));

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
