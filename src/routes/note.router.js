const express = require('express');
const noteRouter = express.Router();
const noteController = require('../controllers/note.controller');

noteRouter.get('/', noteController.noteList);
noteRouter.get('/:id', noteController.note);
noteRouter.post('/', noteController.createNote);
noteRouter.patch('/:id', noteController.updateNote);
noteRouter.delete('/:id', noteController.deleteNote);

module.exports = noteRouter;
