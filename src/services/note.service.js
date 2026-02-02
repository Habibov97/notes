const noteModel = require('../models/note.model');

const getNotes = async () => {
  let list = await noteModel.find();
  if (!list) return [];
  return list;
};

const getNote = async (id) => {
  let item = await noteModel.findOne({ _id: id });
  return item;
};

const createNoteByServices = async (params) => {
  let note = noteModel.create({
    title: params.title,
    content: params.content,
  });
  // await noteModel.save(note);

  return note;
};

const updateNoteByServices = async (id, params) => {
  const { title, content } = params;
  let note = await noteModel.findByIdAndUpdate(
    id,
    {
      title,
      content,
    },
    { new: true, runValidators: true },
  );

  return note;
};

const updateNoteByServices2 = async (id, params) => {
  let note = await noteModel.findOne({ _id: id });

  for (const [key, value] of Object.entries(params)) {
    note[key] = value;
  }

  note.save();

  return note;
};

const deleteNoteByServices = async (id) => {
  let note = await noteModel.findByIdAndDelete(id);

  return note;
};

const noteService = {
  getNotes,
  getNote,
  createNoteByServices,
  updateNoteByServices,
  deleteNoteByServices,
  updateNoteByServices2,
};

module.exports = noteService;
