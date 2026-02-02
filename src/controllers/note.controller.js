const {
  getNotes,
  getNote,
  createNoteByServices,
  updateNoteByServices,
  updateNoteByServices2,
  deleteNoteByServices,
} = require('../services/note.service');

exports.noteList = async (req, res) => {
  const notes = await getNotes();
  res.status(200).json({ status: 'success', notes });
};

exports.note = async (req, res) => {
  const id = req.params.id;
  const note = await getNote(id);

  if (!note) return res.status(404).json({ error: "Couldn't find note" });

  res.status(200).json({ status: 'success', note });
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;

  const newNote = await createNoteByServices({ title, content });
  if (!newNote) res.status(400).json({ error: 'Cannot create note' });

  res.status(201).json({ status: 'success', newNote });
};

exports.updateNote = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  if (!id) return res.status(400).json({ message: 'Id is not valid!' });
  if (!body) return res.status(400).json({ message: 'there are not parameters for update' });

  const updatedNote = await updateNoteByServices2(id, body);
  if (!updatedNote) return res.status(404).json({ error: 'Note is not found!' });

  res.status(200).json({ status: 'success', message: 'note updated successfully', updatedNote });
};

exports.deleteNote = async (req, res) => {
  const id = req.params.id;

  if (!id) return res.status(400).json({ message: 'Id is not valid!' });
  const result = await deleteNoteByServices(id);

  if (!result) return res.status(404).json({ error: 'Note is not found!' });

  res.json({ message: 'Note has been deleted successfully!' });
};
