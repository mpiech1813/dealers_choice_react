const express = require('express');
const path = require('path');

const app = express();
const { static } = express;

app.use('/public', static(path.join(__dirname, './public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

const run = async () => {
  try {
    const PORT = process.env.PORT || 1813;
    app.listen(PORT, () => console.log(`app listening on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

run();
