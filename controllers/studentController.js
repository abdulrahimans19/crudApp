const express = require("express");
const Student = require("../model/studentModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.render("index", { students });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/create", async (req, res) => {
  try {
    await Student.create({
      name: req.body.name,
      mark: req.body.mark,
    });
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.render("edit", { student });
  } catch (error) {
    res.status(404).send("Student not found");
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      mark: req.body.mark,
    });
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.status(404).send("Student not found");
  }
});

module.exports = router;
