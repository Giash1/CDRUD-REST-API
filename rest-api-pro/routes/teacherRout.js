//
const express = require('express');
const router = express.Router();

const { Teacher } = require('../models/teacher');

// Get All teachers using router
router.get('/api/teachers', async (req, res) => {
  try {
    const data = await Teacher.find({});
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Get Single Teacher
router.get('/api/teacher/:id', async (req, res) => {
  try {
    const data = await Teacher.findOne({ _id: req.params.id });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Save Teacher
router.post('/api/teacher/add', async (req, res) => {
  try {
    const tea = new Teacher({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      subject: req.body.subject,
    });
    const data = await tea.save();
    res.status(200).json({
      code: 200,
      message: 'Teacher Added Successfully',
      addTeacher: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Update Teacher
router.put('/api/teacher/update/:id', async (req, res) => {
  try {
    const tea = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      subject: req.body.subject,
    };
    const data = await Teacher.findOneAndUpdate(
      { _id: req.params.id },
      { $set: tea },
      { new: true }
    );
    res.status(200).json({
      code: 200,
      message: 'Teacher Updated Successfully',
      updateTeacher: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Delete Teacher by id
router.delete('/api/teacher/delete/:id', async (req, res) => {
  try {
    const data = await Teacher.findOneAndRemove({ _id: req.params.id });
    res.status(200).json({
      code: 200,
      message: 'Teacher deleted',
      deleteTeacher: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// exporting router
module.exports = router;
