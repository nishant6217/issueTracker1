const projectData = require("../models/project");
const Bug = require("../models/bug");

module.exports.home = async (req, res) => {
  let project = await projectData.find({});
  if (!project) {
    return res.status(400).json({
      success: false,
      message: "project doesn't exist",
    });
  }
  if (project) {
    res.render("home", {
      title: "Issue Tracker",
      project: project,
    });
  }
};

module.exports.create = async (req, res) => {
  let project = await projectData.create({
    name: req.body.name,
    author: req.body.author,
    desc: req.body.desc,
  });
  return res.redirect("back");
};

module.exports.bug = async (req, res) => {
  let project = await projectData.find({});
  let bug = await projectData.find({}).populate("Bug");
  console.log(bug);
  if (bug) {
    res.render("bugs", {
      title: project.name,
      bug: bug,
      project: project,
    });
  }
};
module.exports.bugCreate = async (req, res) => {
  let project = projectData.findById(req.params.id);

  let bugi = await Bug.create({
   
    author: req.body.author,
    title: req.body.title,
    descr: req.body.descr,
    label: req.body.label,
  });
  // project.bug.push(bugi);
  // project.save();

  return res.redirect("back");
};
