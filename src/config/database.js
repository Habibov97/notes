const mongoose = require('mongoose');
const config = require('.');

mongoose
  .connect(config.databaseURL)
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log('Database connection error!!!', err);
  });
