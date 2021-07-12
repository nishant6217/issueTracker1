const express = require("express");

const router = express.Router();

const project = require("../controller");

router.get("/", project.home);
router.post("/create", project.create);
router.get("/bug/:id", project.bug);
router.post("/bug-create/:id", project.bugCreate);
router.post("/bug-search", project.bugSeacrh);
module.exports = router;
