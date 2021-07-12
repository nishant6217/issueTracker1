const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    bug: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bug",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ProjectDb = mongoose.model("Project", projectSchema);

module.exports = ProjectDb;
