const config = require('./config/index');
const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'application is running!' });
});

app.use('/api', router);

app.listen(config.port, () => {
  console.log('Listening the http://localhost:' + config.port);
});
