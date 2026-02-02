const express = require('express');
const noteRouter = require('./note.router');

const router = express.Router();

router.use('/notes', noteRouter);

module.exports = router;
