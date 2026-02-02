const config = require('./config/index');
require('./config/database');
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'application is running!' });
});

app.use('/api', router);

app.listen(config.port, () => {
  console.log('Listening the http://localhost:' + config.port);
});
