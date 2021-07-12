const mongoose = require("mongoose");

const bugSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    of: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProjectDb",
    },
  },
  {
    timestamps: true,
  }
);

const Bug = mongoose.model("Bug", bugSchema);

module.exports = Bug;
