const express = require('express');
const path = require('path');
const syncAndSeed = require('./db/syncAndSeed');
// const morgan = require('morgan');

const app = express();
const { static } = express;

// app.use('/public', static(path.join(__dirname, './public')));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use('/api', require('./routes/index'));
// app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, './kolindex.html'));
  } catch (error) {
    console.log(error);
  }
});

/* app.use((error, req, res, next)=> {
  res.status(500).send(error.message)
}) ==> chgeck this for error handling */

const run = async () => {
  try {
    await syncAndSeed();

    const PORT = process.env.PORT || 1813;
    app.listen(PORT, () =>
      console.log(`
    
    app listening on ${PORT}
    
    http://localhost:${PORT}/

    `)
    );
  } catch (error) {
    console.log(error);
  }
};

run();
