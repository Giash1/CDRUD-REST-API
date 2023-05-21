

// const express = require('express');
// const router = express.Router();

// const { Student } = require('../models/student');

// // Get All students using router
// router.get('/api/students', async (req, res) => {
//   try {
//     const data = await Student.find({});
//     res.send(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server Error');
//   }
// });

// // Get Single Student
// router.get('/api/student/:id', async (req, res) => {
//   try {
//     const data = await Student.findOne({ _id: req.params.id });
//     res.send(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server Error');
//   }
// });

// // Save Students
// router.post('/api/student/add', async (req, res) => {
//   try {
//     const stu = new Student({
//       name: req.body.name,
//       email: req.body.email,
//       age: req.body.age,
//     });
//     const data = await stu.save();
//     res.status(200).json({
//       code: 200,
//       message: 'Student Added Successfully',
//       addStudent: data,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server Error');
//   }
// });

// // Update Student
// router.put('/api/student/update/:id', async (req, res) => {
//   try {
//     const stu = {
//       name: req.body.name,
//       email: req.body.email,
//       age: req.body.age,
//     };
//     const data = await Student.findOneAndUpdate(
//       { _id: req.params.id },
//       { $set: stu },
//       { new: true }
//     );
//     res.status(200).json({
//       code: 200,
//       message: 'Student Updated Successfully',
//       updateStudent: data,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server Error');
//   }
// });

// // Delete Student by id
// router.delete('/api/student/delete/:id', async (req, res) => {
//   try {
//     const data = await Student.findOneAndRemove({ _id: req.params.id });
//     res.status(200).json({
//       code: 200,
//       message: 'Student deleted',
//       deleteStudent: data,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server Error');
//   }
// });

// // exporting router
// module.exports = router;

const express = require('express');
const router = express.Router();
const studentService = require('../services/studentService');

// Get all students
router.get('/api/students', async (req, res) => {
  try {
    const data = await studentService.getAllStudents();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Get a single student
router.get('/api/student/:id', async (req, res) => {
  try {
    const data = await studentService.getStudentById(req.params.id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Add a new student
router.post('/api/student/add', async (req, res) => {
  try {
    const studentData = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    };
    const data = await studentService.addStudent(studentData);
    res.status(200).json({
      code: 200,
      message: 'Student Added Successfully',
      addStudent: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Update a student
router.put('/api/student/update/:id', async (req, res) => {
  try {
    const studentData = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    };
    const data = await studentService.updateStudent(req.params.id, studentData);
    res.status(200).json({
      code: 200,
      message: 'Student Updated Successfully',
      updateStudent: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Delete a student
router.delete('/api/student/delete/:id', async (req, res) => {
  try {
    const data = await studentService.deleteStudent(req.params.id);
    res.status(200).json({
      code: 200,
      message: 'Student deleted',
      deleteStudent: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
