const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } },
);

const noteModel = mongoose.model('note', noteSchema);

module.exports = noteModel;
